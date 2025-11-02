import { Briefcase, Calendar, Code, File,  LayoutDashboardIcon, List, Map, Puzzle, Settings, SquarePen, User, Users, WalletCards } from "lucide-react";

export const SidebarOption = [
    {
        name:"Dashboard",
        icon: LayoutDashboardIcon,
        path: "/dashboard",
    },
    {
        name:"Scheduled Interview",
        icon: Calendar,
        path: "/scheduled-interview",
    },
    {
        name:"All Interview",
        icon: List,
        path: "/all-interview",
    },
        {
        name:"ATS Analyser",
        icon: File,
        path: "/ats-analyser",
    },
        {
        name:"Roadmap",
        icon: Map,
        path: "/roadmap",
    },
    {
        name:"Billing",
        icon: WalletCards,
        path: "/biling",
    },
    {
        name:"Settings",
        icon: Settings,
        path: "/settings",
    },
]


export const AiToolsData = [
    {
        title: 'AI Interview Assistant',
        description: 'Practice interviews with AI-powered mock sessions and get instant feedback to improve your answers and confidence.',
        Icon: SquarePen,
        bg: { from: '#3588F2', to: '#0BB0D7' },
        path: '/ai/write-article'
    },
    {
        title: 'ATS Resume Analyzer',
        description: 'Optimize your resume to pass Applicant Tracking Systems with AI-driven insights on keywords, format, and content.',
        Icon: File,
        bg: { from: '#B153EA', to: '#E549A3' },
        path: '/ai/blog-titles'
    },
    {
        title: 'AI Roadmap Generator',
        description: 'Create personalized learning and career roadmaps based on your goals and industry trends using AI suggestions.',
        Icon: Map,
        bg: { from: '#20C363', to: '#11B97E' },
        path: '/ai/generate-images'
    },

]

export const InterviewType = [
    {
        title:"Techincal",
        icon:Code
    },
    {
        title:"Behavioral",
        icon:User
    },
    {
        title:"Experience",
        icon:Briefcase
    },
    {
        title:"Problem SLoving",
        icon:Puzzle
    },
    {
        title:"Leadership",
        icon:Users
    },
]

export const QUESTONS_PROMPT = `
You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of high-quality interview questions:

Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}

Your task:
1. Analyze the job description to identify key responsibilities, required skills, and expected experience.
2. Generate a list of interview questions based on the interview duration.
3. Adjust the number and depth of questions to match the interview duration.
4. Ensure the questions align with the tone and structure of a real-life {{type}} interview.
5. Format your response in JSON format as an array list of questions.

Format example:
interviewQuestions = [
  {
    question: "Explain how you would optimize a React application for performance.",
    type: "Technical" // Options: Technical | Behavioral | Experience | Problem Solving | Leadership
  }
]

The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.
`;
