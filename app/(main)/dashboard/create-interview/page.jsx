"use client";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import { toast } from "sonner";

export default function CreateInterview() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onGoToNext = () => {
    if (
      !formData?.jobPosition ||
      !formData?.jobDescription ||
      !formData?.interviewDuration ||
      !formData?.type ||
      formData?.type?.length === 0
    ) {
      toast("Please enter all details");
      return;
    }

    setStep(step + 1);
  };

  return (
    <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-5">
      <div className="flex gap-5 font-bold text-2xl items-center">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2>Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className="my-5 mt-5" />
      {step == 1 ? (
        <FormContainer
          onHandleInputChange={onHandleInputChange}
          GoToNext={() => onGoToNext()}
        />
      ) : step == 2 ? (
        <QuestionList formData={formData}/>
      ) : null}
    </div>
  );
}
