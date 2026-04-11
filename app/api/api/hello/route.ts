export async function GET() {
  return Response.json({
    message: "Sain uu",
    name: "Bataa",
    age: 20,
    skills: ["javaScript", "Reacth", "Next.js"],
  });
}
