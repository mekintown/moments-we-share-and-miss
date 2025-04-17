"use client";

import NextButton from "@/components/NextButton";
import { useState, useEffect } from "react";

const Page = () => {
  const [answerSound, setAnswerSound] = useState<string | null>(null);

  useEffect(() => {
    const savedAnswerSound = localStorage.getItem("web_question_sound");
    setAnswerSound(savedAnswerSound);
  }, []);

  return (
    <>
      <div className="row-span-3 text-center items-center text-subheader text-main-cream">
        <div className="">เสียงที่เราจำได้คือ {answerSound}</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-reveal-3"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
