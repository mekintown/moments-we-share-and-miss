"use client";

import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerImportant, setAnswerImportant] = useState<string>("");
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    if (answerImportant) {
      localStorage.setItem("answerImportant", answerImportant);
    }
  }, [answerImportant]);

  return (
    <>
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
            className="h-full"
          />
        </div>
      </div>
    </>
  );
};
export default Page;
