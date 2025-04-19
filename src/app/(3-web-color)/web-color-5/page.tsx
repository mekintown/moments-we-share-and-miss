"use client";

import { Button } from "@/components/ui/button";
import { Color, Name } from "@/constants/localStorageConstants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string>("คุณ");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem(Name);
    if (saved) setName(saved);
  }, []);

  useEffect(() => {
    if (color) localStorage.setItem(Color, color);
  }, [color]);

  return (
    <div className="text-center text-subheader space-y-4">
      <div className="text-main-cream">
        <div>ถ้าให้ลองนึกย้อนกลับไป ณ เวลานั้น</div>
        <div>{name}</div>
        <div>เห็นมันเป็นสีอะไรหรอ?</div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-17">
        {[
          { key: "red", label: "แดง", className: "bg-sub-red text-main-cream" },
          {
            key: "orange",
            label: "ส้ม",
            className: "bg-sub-orange text-main-cream",
          },
          { key: "yellow", label: "เหลือง", className: "bg-sub-yellow" },
          {
            key: "green",
            label: "เขียว",
            className: "bg-sub-green text-main-cream",
          },
          { key: "blue", label: "ฟ้า", className: "bg-sub-blue" },
          { key: "purple", label: "ม่วง", className: "bg-sub-purple" },
          { key: "pink", label: "ชมพู", className: "bg-sub-pink" },
          { key: "white", label: "ขาว", className: "bg-main-cream" },
        ].map(({ key, label, className }) => (
          <Link key={key} href="/web-color-6">
            <Button
              className={`${className} w-full`}
              onClick={() => setColor(key)}
            >
              {label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
