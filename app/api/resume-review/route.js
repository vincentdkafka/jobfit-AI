// ✅ Force Node runtime (critical)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import OpenAI from "openai";

// ✅ OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json({
        success: false,
        message: "No resume file uploaded.",
      });
    }

    // ✅ Convert PDF to Buffer (works in Next.js)
    const buffer = Buffer.from(await file.arrayBuffer());

    // ✅ Dynamically import pdf-parse
    const pdfParse = (await import("pdf-parse")).default;
    const pdfData = await pdfParse(buffer);

    if (!pdfData.text.trim()) {
      return NextResponse.json({
        success: false,
        message: "Unable to extract text from resume.",
      });
    }

    // ✅ Generate review with OpenAI
    const prompt = `
    Review this resume and provide:
    1. Summary of profile
    2. Strengths
    3. Weaknesses
    4. ATS Optimization Tips
    5. Overall Impression

    Resume:
    ${pdfData.text}
    `;

    const completion = await client.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1",
      messages: [{ role: "user", content: prompt }],
    });

    const content = completion.choices[0].message.content;

    return NextResponse.json({ success: true, content });
  } catch (error) {
    console.error("Resume Review Error:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
