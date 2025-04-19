"use client";

import NextButton from "@/components/NextButton";
import { Name } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    setName(savedName);
  }, []);

  return (
    <>
      <div className="row-start-1"></div>
      <div className="row-start-2">
        {" "}
        <div className="text-center text-subheader space-y-2 ">
          <div className="text-main-cream ">
            <div className="">เราเชื่อว่าความทรงจำนี้</div>
            <div className="">ต้องมีความหมายกับ</div>
            <div className="">{name} มากแน่ๆ</div>
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="/web-color-2" label="แตะเพื่อไปต่อ" />
      </div>
    </>
  );
}
