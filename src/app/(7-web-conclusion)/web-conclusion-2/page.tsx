"use client";

import NextButton from "@/components/NextButton";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
  }, []);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">สิ่งที่ {name}</div>
        <div className="">ยังจดจำได้เสมอ</div>
        <div className="">อาจเป็นสิ่งที่ใครบางคน</div>
        <div className="">อยากได้ยินอีกครั้ง</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-conclusion-3"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
