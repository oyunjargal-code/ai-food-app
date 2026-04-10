import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const image = await client.textToImage({
      provider: "fal-ai",
      model: "black-forest-labs/FLUX.1-dev",
      inputs: "Astronaut riding a horse",
      parameters: { num_inference_steps: 5 },
    });
    console.log("image: ", image);
    return NextResponse.json(image);
  } catch (error) {
    console.log(error);
  }
}
