"use client";

import { useState } from "react";
import CardPreview from "@/components/CardPreview";

export default function CustomCardPage() {

  const [image, setImage] = useState<string>("");

  function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];

    setImage(URL.createObjectURL(file));
  }

  return (
    <main className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Custom Card Creator
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {image && (
        <div className="mt-10">
          <CardPreview image={image}/>
        </div>
      )}

    </main>
  );
}
