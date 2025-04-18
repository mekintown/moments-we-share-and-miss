"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import {
  WebAnswerColor,
  WebQuestionColor,
} from "@/constants/localStorageConstants";
import { WebColor } from "@/enums/enums";
import { colorSlugMap } from "@/lib/slugMap";
import { useEffect, useState } from "react";

export default function Page() {
  const [answerColor, setAnswerColor] = useState("");
  const [color, setColor] = useState<WebColor | null>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem(WebQuestionColor);
    if (savedColor) {
      setColor(savedColor as WebColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(WebAnswerColor, answerColor);
  }, [answerColor]);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
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
      </div>
      <div className="row-start-4">
        <NextButton
          url={`/web-color-${color ? colorSlugMap[color] : ""}`}
          label="ต่อไป"
          disabled={answerColor === ""}
        />
      </div>
    </>
  );
}
