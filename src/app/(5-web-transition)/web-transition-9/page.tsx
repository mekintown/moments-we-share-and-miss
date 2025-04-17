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
        <div className="">นี่คือความทรงจำของ</div>
        <div className="">{name}</div>
      </div>
    </>
  );
};
export default Page;
