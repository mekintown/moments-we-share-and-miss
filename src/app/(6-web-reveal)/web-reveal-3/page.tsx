"use client";

import NextButton from "@/components/NextButton";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = () => {
  const [color, setColor] = useState<string | null>(null);
  const [colorAnswer, setColorAnswer] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem("web_question_color");
    const savedColorAnswer = localStorage.getItem("web_answer_color");
    const savedImgSrc = localStorage.getItem("imageSrc");
    setImageSrc(savedImgSrc);
    setColor(savedColor);
    setColorAnswer(savedColorAnswer);
  }, []);

  return (
    <>
      <div className="row-span-3 text-center items-center text-subheader text-main-cream">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="reveal-image"
            width={300}
            height={300}
            className="mx-auto py-5"
          />
        )}
        <div className="">ช่วงเวลานี้เหมือนสี {color}</div>
        <div className="">เพราะ {colorAnswer}</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-reveal-4"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
