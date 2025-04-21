"use client";

import PageWithTapToNext from "@/components/PageWithTapToNext";
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
    <PageWithTapToNext nextUrl="web-question-8">
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">จากหลากหลายเรื่องราว</div>
        <div className="">ในชีวิต {name}</div>
        <div className="">ยังคงจำเรื่องนี้ได้ชัดเจน</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
