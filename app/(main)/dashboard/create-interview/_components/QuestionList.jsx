import axios from "axios";
import { Loader2Icon, CheckCircle, AlertCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { useUser } from "@/app/Provider";
import { v4 as uuidv4 } from "uuid";

const QuestionList = ({ formData }) => {
  const [loading, setLoading] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);

  const onFinish = async () => {
    const interview_id = uuidv4();

    const payload = {
      job_position: formData.jobPosition,
      job_description: formData.jobDescription,
      interview_duration: formData.interviewDuration,
      question_list: questionList,
      user_email: user?.email,
      interview_id: uuidv4(),
    };

    console.log("Inserting payload:", payload);

    const { data, error } = await supabase
      .from("Interviews")
      .insert([payload])
      .select("*");

    if (error) {
      console.error("Supabase insert error:", error);
      toast.error("Failed to save interview.");
    } else {
      console.log("Inserted data:", data);
      toast.success("Interview saved successfully!");
    }
  };

  const GenerateQuestionList = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });

      console.log("API Response:", result.data);

      if (result.data.error) {
        throw new Error(result.data.error);
      }

      // Parse the content if it's a string
      let questions = result.data.content;

      if (typeof questions === "string") {
        // Remove markdown code blocks if present
        const cleanedContent = questions
          .replace(/```json\s*/g, "")
          .replace(/```\s*/g, "")
          .trim();

        try {
          questions = JSON.parse(cleanedContent);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
          throw new Error("Failed to parse questions from AI response");
        }
      }

      // Handle different possible response formats
      let finalQuestions = [];

      if (Array.isArray(questions)) {
        finalQuestions = questions;
      } else if (questions && typeof questions === "object") {
        // Check if it's an object with a questions property
        if (questions.questions && Array.isArray(questions.questions)) {
          finalQuestions = questions.questions;
        } else if (
          questions.interviewQuestions &&
          Array.isArray(questions.interviewQuestions)
        ) {
          finalQuestions = questions.interviewQuestions;
        } else {
          // Try to extract questions from object values
          const values = Object.values(questions);
          if (values.length > 0 && Array.isArray(values[0])) {
            finalQuestions = values[0];
          } else {
            console.error("Questions object structure:", questions);
            throw new Error("Could not extract questions from response");
          }
        }
      } else {
        console.error("Questions is not an array or object:", questions);
        throw new Error("Invalid questions format received");
      }

      if (finalQuestions.length > 0) {
        setQuestionList(finalQuestions);
        toast.success("Questions generated successfully!");
      } else {
        throw new Error("No questions found in AI response");
      }
    } catch (error) {
      console.error("Error generating questions:", error);
      setError(error.message || "Failed to generate questions");
      toast.error("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const retryGeneration = () => {
    GenerateQuestionList();
  };

  return (
    <div className="space-y-6">
      {loading && (
        <div className="flex items-center gap-3 p-5 bg-blue-50 rounded-xl border border-primary">
          <Loader2Icon className="animate-spin text-blue-600" />
          <div>
            <h2 className="font-semibold text-gray-800 flex gap-5 items-center">
              Generating Interview
            </h2>
            <p className="text-primary text-sm">
              Our AI is crafting your interview questions...
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-5 bg-red-50 rounded-xl border border-red-200">
          <AlertCircle className="text-red-600" />
          <div className="flex-1">
            <h2 className="font-semibold text-red-800">
              Error Generating Questions
            </h2>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
          <Button onClick={retryGeneration} variant="outline" size="sm">
            Retry
          </Button>
        </div>
      )}

      {!loading && !error && questionList && questionList.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <h2 className="text-lg font-semibold">
              Generated Interview Questions
            </h2>
          </div>

          <div className="space-y-3">
            {questionList.map((question, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">
                      {question.question}
                    </p>
                    {question.type && (
                      <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {question.type}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <Button onClick={() => onFinish()} className="px-8 py-2">
              Finish
            </Button>
          </div>
        </div>
      )}

      {!loading && !error && questionList && questionList.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No questions generated. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
