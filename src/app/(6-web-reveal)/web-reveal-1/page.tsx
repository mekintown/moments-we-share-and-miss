"use client";

import NextButton from "@/components/NextButton";
import { useState, useEffect } from "react";

const Page = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [who, setWho] = useState<string | null>(null);
  const [why, setWhy] = useState<string | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    const savedWho = localStorage.getItem("who");
    const savedWhy = localStorage.getItem("web_answer_why");
    if (savedLocation) {
      setLocation(savedLocation);
    }
    if (savedWho) {
      setWho(savedWho);
    }
    if (savedWhy) {
      setWhy(savedWhy);
    }
  }, []);

  return (
    <>
      <div className="row-span-3 text-center items-center text-subheader text-main-cream">
        {/* TODO: Animate this one after another */}
        <div>เรา...</div>
        <div>
          อยู่ที่ {location} กับ {who}
        </div>
        <div>ตอนที่ {why}</div>
      </div>

      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-reveal-2"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
