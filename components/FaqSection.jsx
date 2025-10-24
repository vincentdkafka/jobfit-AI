import React from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "How does the AI Interview Assistant work?",
      answer:
        "The AI Interview Assistant conducts mock interviews, evaluates your responses, and provides real-time feedback to improve your answers, confidence, and communication skills.",
    },
    {
      question: "What is the ATS Resume Analyzer?",
      answer:
        "The ATS Resume Analyzer checks your resume against Applicant Tracking System criteria, highlights missing keywords, and suggests improvements to increase your chances of passing automated resume screenings.",
    },
    {
      question: "How does the AI Roadmap Generator help me?",
      answer:
        "The AI Roadmap Generator creates a personalized learning and career roadmap, recommending skills, courses, and milestones based on your goals and current industry trends.",
    },
    {
      question: "Can I use PrepWise for multiple industries?",
      answer:
        "Yes, PrepWise is designed to adapt to different industries, helping you tailor your interview practice, resume, and roadmap based on your target field.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-16 px-4 md:px-0 py-8 md:py-12">
        <img
          className="max-w-md w-full rounded-xl h-auto"
          src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
          alt="AI Interview"
        />
        <div>
          <p className="text-primary text-sm font-medium">FAQ's</p>
          <h1 className="text-3xl font-semibold">Looking for answers?</h1>
          <p className="text-sm text-slate-500 mt-2 pb-4">
            PrepWise helps you prepare smarter with AI-driven interview practice, resume optimization, and career roadmap generation.
          </p>
          {faqs.map((faq, index) => (
            <div
              className="border-b border-slate-200 py-4 cursor-pointer"
              key={index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{faq.question}</h3>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqSection;
