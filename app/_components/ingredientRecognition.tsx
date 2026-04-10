"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export default function IngredientRecognition() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!input) return;
    setLoading(true);
    setResult("");

    const res = await fetch("/api/image/ingredient", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Жишээ: Би өндөгтэй хуурсан будаа хийхийг хүсч байна..."
        className="border rounded-lg p-3 min-h-[100px] text-sm"
      />
      <Button onClick={analyze} disabled={!input || loading}>
        {loading ? <LoaderCircle className="animate-spin" /> : "Орц таних"}
      </Button>
      {result && (
        <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap text-sm">
          {result}
        </div>
      )}
    </div>
  );
}
