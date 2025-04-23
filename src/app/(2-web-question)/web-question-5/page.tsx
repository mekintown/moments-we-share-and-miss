"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { Location, WebAnswerWhy } from "@/constants/localStorageConstants";
import { LocationType } from "@/enums/enums";
import { locationSlugMap } from "@/lib/slugMap";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerWhy, setAnswerWhy] = useState<string>("");
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    if (answerWhy) {
      localStorage.setItem(WebAnswerWhy, answerWhy);
    }
  }, [answerWhy]);

  useEffect(() => {
    const saved = localStorage.getItem(Location);
    if (saved) {
      setLocation(saved as LocationType);
    }
  }, []);

  return (
    <>
      <div className="row-start-1 self-end py-3">
        <div className="text-main-cream text-center text-subheader">
          <div className="">เล่าให้เราฟังหน่อยว่า</div>
          <div className="">ตอนนั้นเป็นยังไง</div>
        </div>
      </div>
      <div className="w-full h-full row-start-2 row-span-2">
        <div className="h-full ">
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

      <div className="row-start-4">
        <NextButton
          url={`/web-question-${location ? locationSlugMap[location] : ""}`}
          label="ต่อไป"
          disabled={answerWhy === ""}
        />
      </div>
    </>
  );
};

export default Page;
