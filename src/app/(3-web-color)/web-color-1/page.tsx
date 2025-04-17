"use client";

import NextButton from "@/components/NextButton";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
  }, []);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader space-y-2">
        <div className="text-main-cream ">
          <div className="">เราเชื่อว่าความทรงจำนี้</div>
          <div className="">ต้องมีความหมายกับ</div>
          <div className="">{name} มากแน่ๆ</div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="web-color-2"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
}
