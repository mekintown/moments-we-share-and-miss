"use client";

import NextButton from "@/components/NextButton";
import { Name } from "@/constants/localStorageConstants";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    if (savedName) {
      setName(savedName);
    }
  }, []);
  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">จากหลากหลายเรื่องราว</div>
        <div className="">ในชีวิต {name}</div>
        <div className="">ยังคงจำเรื่องนี้ได้ชัดเจน</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="web-question-8"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
