"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export function GreateImage() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!input) return;
    setLoading(true);
    setImageUrl("");

    const res = await fetch("/api/image/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();

    setImageUrl(data.imageUrl);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Жишээ: тахианы шөл, гоёмсог зураг..."
        className="border rounded-lg p-3 text-sm"
      />
      <Button onClick={generate} disabled={!input || loading}>
        {loading ? <LoaderCircle className="animate-spin" /> : "Зураг үүсгэх"}
      </Button>
      {imageUrl && (
        <img src={imageUrl} alt="generated" className="w-full rounded-lg" />
      )}
    </div>
  );
}
