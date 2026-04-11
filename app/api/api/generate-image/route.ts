import { InferenceClient } from "@huggingface/inference";

import { NextRequest, NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const imageBlob = await client.textToImage({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      inputs: prompt,
    });

    const blob = new Blob([imageBlob]);
    const arrayBuffer = await blob.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    return NextResponse.json({
      imageUrl: `data:image/png;base64,${base64}`,
      headers: { "Content-Type": "image/*" },
    });
  } catch (err) {
    console.log(err);
  }
}
