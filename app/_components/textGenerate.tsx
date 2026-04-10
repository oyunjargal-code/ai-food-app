"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

export default function TextGenerate() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Зураг сонгоход base64 болгоно
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  // AI-д илгээх
  const analyze = async () => {
    if (!image) return;
    setLoading(true);

    const response = await fetch("/api/image/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: image }),
    });

    const data = await response.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Зураг upload */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {/* Зураг preview */}
      {image && (
        <img src={image} alt="uploaded" className="w-full rounded-lg" />
      )}

      {/* Analyze товч */}
      <Button onClick={analyze} disabled={!image || loading}>
        {loading ? <LoaderCircle className="animate-spin" /> : "Analyze"}
      </Button>

      {/* Хариу */}
      {result && (
        <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}
