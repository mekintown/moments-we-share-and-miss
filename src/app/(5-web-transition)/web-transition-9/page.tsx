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
    <PageWithTapToNext nextUrl="web-reveal-1">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">นี่คือความทรงจำของ</div>
        <div className="">{name}</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
