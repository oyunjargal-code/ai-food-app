import { InferenceClient } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  const { imageUrl } = await req.json();

  const result = await client.chatCompletion({
    model: "moonshotai/Kimi-K2.5:novita",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Describe this food image. What ingredients do you see?",
          },
          {
            type: "image_url",
            image_url: { url: imageUrl },
          },
        ],
      },
    ],
  });

  return NextResponse.json({
    result: result.choices[0].message.content,
  });
}
