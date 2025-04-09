"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem("name");
    setName(savedColor);
  }, []);

  return (
    <div className="text-center text-subheader space-y-2 ">
      <div className="text-main-cream ">
        <div className="">เราเชื่อว่าความทรงจำนี้</div>
        <div className="">ต้องมีความหมายกับ</div>
        <div className="">{name} มากแน่ๆ</div>
      </div>
    </div>
  );
}
