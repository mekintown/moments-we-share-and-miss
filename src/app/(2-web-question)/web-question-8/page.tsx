"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { Name } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerImportant, setAnswerImportant] = useState<string>("");
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    if (answerImportant) {
      localStorage.setItem("web_answer_important", answerImportant);
    }
  }, [answerImportant]);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
        <div className="h-full text-main-cream text-center text-subheader">
          <div className="">เล่าให้เราฟังได้ไหม</div>
          <div className="">เพราะอะไรเรื่องนี้ถึงติดอยู่ในใจ</div>
          <div className="">ของ {name}</div>
          <div className="h-full py-3">
            <TextAreaWithCounter
              onChange={(e) => {
                setAnswerImportant(e.target.value);
              }}
              value={answerImportant}
              maxCount={120}
              className="h-9/10"
            />
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          url={`/web-color-1`}
          label="ต่อไป"
          disabled={answerImportant === ""}
        />
      </div>
    </>
  );
};
export default Page;
