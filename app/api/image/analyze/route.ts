// import { InferenceClient } from "@huggingface/inference";
// import { NextRequest, NextResponse } from "next/server";

// const client = new InferenceClient(process.env.HF_TOKEN);

// export async function POST(req: NextRequest) {
//   try {
//     const { imageUrl } = await req.json();

//     // base64 data URL-ийг салгах: "data:image/jpeg;base64,XXXX"
//     const base64Data = imageUrl.split(",")[1];
//     const mimeType = imageUrl.split(";")[0].split(":")[1]; // "image/jpeg"

//     const result = await client.chatCompletion({
//       model: "meta-llama/Llama-3.2-11B-Vision-Instruct",
//       messages: [
//         {
//           role: "user",
//           content: [
//             {
//               type: "text",
//               text: "Describe this food image. What ingredients do you see?",
//             },
//             {
//               type: "image_url",
//               image_url: {
//                 url: `data:${mimeType};base64,${base64Data}`,
//               },
//             },
//           ],
//         },
//       ],
//     });

//     return NextResponse.json({
//       result: result.choices[0].message.content,
//     });
//   } catch (error: any) {
//     console.error("API error:", error);
//     return NextResponse.json(
//       { error: error.message || "Something went wrong" },
//       { status: 500 },
//     );
//   }
// }

// import { InferenceClient } from "@huggingface/inference";

// const client = new InferenceClient(process.env.HF_TOKEN);

// const chatCompletion = await client.chatCompletion({
//   model: "moonshotai/Kimi-K2.5:novita",
//   messages: [
//     {
//       role: "user",
//       content: [
//         {
//           type: "text",
//           text: "Describe this image in one sentence.",
//         },
//         {
//           type: "image_url",
//           image_url: {
//             url: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
//           },
//         },
//       ],
//     },
//   ],
// });

// console.log(chatCompletion.choices[0].message);

import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.NEXT_PUBLIC_GROQ_API_KEY);

const chatCompletion = await client.chatCompletion({
  model: "moonshotai/Kimi-K2.5:fastest",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Describe this image in one sentence.",
        },
        {
          type: "image_url",
          image_url: {
            url: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
          },
        },
      ],
    },
  ],
});

console.log(chatCompletion.choices[0].message);
