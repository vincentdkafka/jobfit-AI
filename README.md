# JobFit AI - Resume ATS Reviewer

An AI-powered resume analysis tool that provides comprehensive feedback on ATS (Applicant Tracking System) compatibility and professional presentation.

## Features

- **AI-Powered Analysis**: Uses advanced AI to analyze resume content and structure
- **ATS Compatibility Check**: Evaluates how well your resume will pass through ATS systems
- **Comprehensive Feedback**: Provides detailed scores, strengths, weaknesses, and suggestions
- **Modern UI**: Beautiful, responsive interface with drag-and-drop file upload
- **PDF Support**: Analyzes PDF resumes with text extraction
- **No Database Required**: Simple, stateless application

## Getting Started

### Prerequisites

- Node.js 18+ 
- OpenRouter API key (for AI analysis)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000/ats-analyser](http://localhost:3000/ats-analyser) to access the resume reviewer

### Getting an OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Sign up for an account
3. Generate an API key
4. Add it to your `.env.local` file

## How to Use

1. Navigate to the ATS Analyser page
2. Upload a PDF resume (max 5MB)
3. Click "Analyze Resume" 
4. Get instant feedback on:
   - Overall score (0-100)
   - ATS compatibility rating
   - Strengths and areas for improvement
   - Specific recommendations
   - Key terms found
   - Detailed analysis

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: OpenRouter API with DeepSeek model
- **PDF Processing**: pdf-parse
- **Icons**: Lucide React

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
