import { InferenceClient } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const result = await client.chatCompletion({
    model: "moonshotai/Kimi-K2.5:novita",
    messages: [
      {
        role: "user",
        content: `Дараах хоолны орц найрлагыг монголоор жагсааж өгөөрэй: ${text}`,
      },
    ],
  });

  return NextResponse.json({
    result: result.choices[0].message.content,
  });
}
