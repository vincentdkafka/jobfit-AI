import { QUESTONS_PROMPT } from "@/services/constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { jobPosition, jobDescription, interviewDuration, type } =
    await req.json();

  const FINAL_PROMPT = QUESTONS_PROMPT.replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration}}", interviewDuration)
    .replace("{{type}}", type);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });
    return NextResponse.json(completion.choices[0].message);
  } catch (e) {
    console.log("API Error:", e);
    return NextResponse.json(
      { error: "Failed to generate questions", details: e.message },
      { status: 500 }
    );
  }
}
