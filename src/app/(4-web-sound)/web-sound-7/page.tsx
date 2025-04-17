"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerSound, setAnswerSound] = useState("");
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    localStorage.setItem("answerSound", answerSound);
    setName(localStorage.getItem("name"));
  }, [answerSound]);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
        <div className="h-full text-main-cream text-center text-subheader">
          <div className="">แล้วสำหรับเรื่องราวที่เล่าให้เราฟัง</div>
          <div className="">เสียงแบบไหนที่ดังก้องอยู่ใน</div>
          <div className="">ความทรงจำของ {name}</div>
          <div className="h-full py-3">
            <TextAreaWithCounter
              onChange={(e) => {
                setAnswerSound(e.target.value);
              }}
              value={answerSound}
              maxCount={120}
              className="h-8/10"
            />
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          url={`/web-color-1`}
          label="ต่อไป"
          disabled={answerSound === ""}
        />
      </div>
    </>
  );
};
export default Page;
