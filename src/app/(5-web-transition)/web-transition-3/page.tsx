"use client";

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
    <PageWithTapToNext nextUrl="web-transition-4">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">เราเชื่อว่าช่วงเวลาเหล่านี้</div>
        <div className="">คงเป็นช่วงเวลาที่มีค่าสำหรับ</div>
        <div className="">{name} มาก ๆ เลย</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
