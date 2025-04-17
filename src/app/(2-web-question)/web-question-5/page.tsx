"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerWhy, setAnswerWhy] = useState<string>("");
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    if (answerWhy) {
      localStorage.setItem("answerWhy", answerWhy);
    }
  }, [answerWhy]);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
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
      </div>

      <div className="row-start-4">
        <NextButton
          url={`/web-question-${location}`}
          label="ต่อไป"
          disabled={answerWhy === ""}
        />
      </div>
    </>
  );
};
export default Page;
