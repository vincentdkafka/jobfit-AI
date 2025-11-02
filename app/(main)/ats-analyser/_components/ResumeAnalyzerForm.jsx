"use client";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ResumeAnalyzerForm() {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !jobTitle || !jobDescription) {
      toast.error("Please fill all fields and upload a resume!");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const formData = new FormData();
      formData.append("resume", file);
      formData.append("jobTitle", jobTitle);
      formData.append("jobDescription", jobDescription);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/resume-review`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        toast.success("Analysis complete!");
        setResult(res.data.result);
      } else {
        toast.error(res.data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to analyze resume");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Job Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Job Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 focus:outline-none focus:ring focus:ring-indigo-200"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block font-semibold mb-1">Upload Resume (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">Result</h2>
          <pre className="text-sm whitespace-pre-wrap text-gray-800">{result}</pre>
        </div>
      )}
    </div>
  );
}
