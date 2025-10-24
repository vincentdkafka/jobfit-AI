import { Calendar, Eraser, File, Hash, Image, LayoutDashboardIcon, List, Map, Paperclip, Scissors, Settings, SquarePen, WalletCards } from "lucide-react";

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