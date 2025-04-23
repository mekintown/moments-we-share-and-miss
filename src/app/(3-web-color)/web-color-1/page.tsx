"use client";

import PageWithTapToNext from "@/components/PageWithTapToNext";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
  }, []);

  return (
    <PageWithTapToNext nextUrl="web-color-2">
      <div className="row-start-2 row-span-2 text-center text-subheader space-y-2">
        <div className="text-main-cream ">
          <div className="">เราเชื่อว่าความทรงจำนี้</div>
          <div className="">ต้องมีความหมายกับ</div>
          <div className="">{name} มากแน่ ๆ</div>
        </div>
      </div>
    </PageWithTapToNext>
  );
}
