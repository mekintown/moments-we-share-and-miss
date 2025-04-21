"use client";

import NextButton from "@/components/NextButton";
import PageWithTapToNext from "@/components/PageWithTapToNext";
import { Name } from "@/constants/localStorageConstants";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    setName(savedName);
  }, []);

  return (
    <PageWithTapToNext nextUrl="web-transition-9">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">ทั้งภาพและเสียงที่</div>
        <div className="">{name} นึกถึง</div>
        <div className="">เราช่วยบันทึกมันไว้หมดแล้วนะ</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
