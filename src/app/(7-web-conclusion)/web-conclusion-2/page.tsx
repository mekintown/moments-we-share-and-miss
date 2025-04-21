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
    <PageWithTapToNext nextUrl="/web-conclusion-3">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">สิ่งที่ {name}</div>
        <div className="">ยังจดจำได้เสมอ</div>
        <div className="">อาจเป็นสิ่งที่ใครบางคน</div>
        <div className="">อยากได้ยินอีกครั้ง</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
