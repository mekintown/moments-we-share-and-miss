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
    <PageWithTapToNext nextUrl="web-transition-3">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">ถูกเรียงร้อยเข้าหากันจนกลายเป็น</div>
        <div className="">ช่วงเวลาที่ {name} </div>
        <div className="">จดจำได้ไม่ลืม</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
