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
    <PageWithTapToNext nextUrl="/web-conclusion-5">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="text-nowrap">หรือไม่แน่ เขาอาจนึกย้อนถึง</div>
        <div className="">ความทรงจำอื่น ๆ</div>
        <div className="">ที่ {name}</div>
        <div className="">อาจลืมไปแล้ว</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
