"use client";

import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

export default function Page() {
  const [answerColor, setAnswerColor] = useState("");

  useEffect(() => {
    localStorage.setItem("answerColor", answerColor);
  }, [answerColor]);
  return (
    <>
      <div className="h-full text-main-cream text-center text-subheader space-y-3">
        <div className="">เพราะ</div>
        <TextAreaWithCounter
          onChange={(e) => {
            setAnswerColor(e.target.value);
          }}
          value={answerColor}
          maxCount={100}
          className="h-full"
        />
      </div>
    </>
  );
}
