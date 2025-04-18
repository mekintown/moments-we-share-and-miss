"use client";

import NextButton from "@/components/NextButton";
import { Name } from "@/constants/localStorageConstants";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    setName(savedName);
  }, []);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">หากได้พูดออกไป</div>
        <div className="">เขาอาจรู้สึกแบบเดียวกับ</div>
        <div className="">{name} ก็ได้นะ</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-conclusion-4"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
