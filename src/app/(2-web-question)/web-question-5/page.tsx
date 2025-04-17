"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerWhy, setAnswerWhy] = useState<string>("");
  useEffect(() => {
    if (answerWhy) {
      localStorage.setItem("answerWhy", answerWhy);
    }
  }, [answerWhy]);

  return (
    <>
      <div className="h-full text-main-cream text-center text-subheader">
        <div className="">เล่าให้เราฟังหน่อยว่า</div>
        <div className="">ตอนนั้นเป็นยังไง</div>
        <div className="h-full py-3">
          <TextAreaWithCounter
            onChange={(e) => {
              setAnswerWhy(e.target.value);
            }}
            value={answerWhy}
            maxCount={150}
            className="h-full"
          />
        </div>
      </div>
    </>
  );
};
export default Page;
