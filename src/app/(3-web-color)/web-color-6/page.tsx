"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import {
  WebAnswerColor,
  WebQuestionColor,
} from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

const colorSlugMap: Record<string, string> = {
  แดง: "red",
  ส้ม: "orange",
  เหลือง: "yellow",
  เขียว: "green",
  ฟ้า: "blue",
  ม่วง: "purple",
  ชมพู: "pink",
  ขาว: "white",
};

export default function Page() {
  const [answerColor, setAnswerColor] = useState("");
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem(WebQuestionColor);
    setColor(savedColor);
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
          url={`/web-color-${color ? colorSlugMap[color] ?? "" : ""}`}
          label="ต่อไป"
          disabled={answerColor === ""}
        />
      </div>
    </>
  );
}
