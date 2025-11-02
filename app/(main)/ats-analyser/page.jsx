"use client";
import React, { useState } from "react";

// 🌟 Rich hardcoded ATS data
const BASE_REPORT = {
  jobMatch: "84%",
  confidence: 0.89,
  overallScore: 84,
  sectionScores: {
    Skills: 90,
    Experience: 82,
    Education: 85,
    Formatting: 76,
    Keywords: 80,
  },
  topKeywordsMatched: ["React", "JavaScript", "Node.js", "REST API", "HTML5", "CSS3", "Git"],
  missingKeywords: ["Docker", "AWS", "GraphQL", "TypeScript"],
  keywordDensity: "6.2% (Ideal: 5–8%)",
  readability: "Excellent (Grade B2)",
  summary:
    "Your resume demonstrates solid front-end skills with modern frameworks. Improve by adding cloud & deployment tools, quantifying achievements, and aligning job titles with industry standards.",
  recommendations: [
    "Add Docker and AWS experience to strengthen technical profile.",
    "Include measurable results (e.g., 'Improved load time by 40%').",
    "Use consistent section headers for ATS readability.",
    "Export resume as PDF (not .docx) for better parsing."
  ],
};

function randomizeReport(base) {
  const variance = (Math.random() * 8 - 4); // ±4%
  const jobMatchNum = Math.max(60, Math.min(97, parseInt(base.jobMatch) + Math.round(variance)));
  const conf = Math.min(0.99, Math.max(0.5, base.confidence + variance / 100));
  const randomOffset = (num) => Math.min(100, Math.max(60, num + Math.round(Math.random() * 6 - 3)));

  return {
    ...base,
    jobMatch: `${jobMatchNum}%`,
    confidence: +(conf).toFixed(2),
    overallScore: randomOffset(base.overallScore),
    sectionScores: Object.fromEntries(
      Object.entries(base.sectionScores).map(([k, v]) => [k, randomOffset(v)])
    ),
  };
}

export default function FancyATSScanner() {
  const [loadingStep, setLoadingStep] = useState(null);
  const [report, setReport] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.resume.files[0];
    if (!file) return alert("Please upload a resume first!");
    setFileName(file.name);
    setReport(null);

    // Simulated multi-step analysis
    setLoadingStep("upload");
    await new Promise((r) => setTimeout(r, 900));
    setLoadingStep("scan");
    await new Promise((r) => setTimeout(r, 1200));
    setLoadingStep("generate");
    await new Promise((r) => setTimeout(r, 800));
    setReport(randomizeReport(BASE_REPORT));
    setLoadingStep(null);
  };

  return (
    <div className="min-h-screen  py-12 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">ATS Resume Scanner</h1>
        <p className="text-center text-gray-600 mb-6">
          Upload your resume and get instant ATS insights
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 text-sm"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {loadingStep ? "Analyzing..." : "Upload & Analyze"}
          </button>
        </form>

        {/* 🌀 Fake Progress Section */}
        {loadingStep && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <p className="font-medium text-indigo-700 mb-2">Status:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className={loadingStep === "upload" ? "font-semibold" : ""}>
                📁 Uploading file...
              </li>
              <li className={loadingStep === "scan" ? "font-semibold" : ""}>
                🔍 Scanning keywords...
              </li>
              <li className={loadingStep === "generate" ? "font-semibold" : ""}>
                🧠 Generating insights...
              </li>
            </ul>

            <div className="mt-3 h-3 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-indigo-600 transition-all duration-500 ease-out ${
                  loadingStep === "upload"
                    ? "w-1/4"
                    : loadingStep === "scan"
                    ? "w-3/4"
                    : "w-[95%]"
                }`}
              />
            </div>
          </div>
        )}

        {/* ✅ Results Section */}
        {report && (
          <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              ATS Report — {fileName}
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Job Match:</strong> {report.jobMatch} |{" "}
              <strong>Confidence:</strong> {report.confidence}
            </p>

            {/* Section Scores */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {Object.entries(report.sectionScores).map(([section, score]) => (
                <div key={section} className="bg-white p-3 rounded-lg shadow-sm border">
                  <p className="text-gray-600 text-sm">{section}</p>
                  <p className="font-bold text-indigo-600">{score}%</p>
                </div>
              ))}
            </div>

            {/* Keyword info */}
            <div className="mb-3">
              <p className="font-medium text-gray-800">✅ Keywords Matched:</p>
              <p className="text-sm text-gray-600">
                {report.topKeywordsMatched.join(", ")}
              </p>
            </div>
            <div className="mb-3">
              <p className="font-medium text-gray-800">❌ Missing Keywords:</p>
              <p className="text-sm text-red-500">
                {report.missingKeywords.join(", ")}
              </p>
            </div>

            <p className="text-gray-700">
              <strong>Keyword Density:</strong> {report.keywordDensity}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Readability:</strong> {report.readability}
            </p>

            {/* Summary */}
            <p className="italic text-gray-800 border-l-4 border-indigo-400 pl-3 mb-4">
              {report.summary}
            </p>

            {/* Recommendations */}
            <div className="bg-white rounded-lg p-4 border">
              <p className="font-semibold text-indigo-700 mb-2">
                📈 Recommendations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                {report.recommendations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
