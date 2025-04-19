"use client";

import { Button } from "@/components/ui/button";
import { WebQuestionColor, Name } from "@/constants/localStorageConstants";
import { WebColor } from "@/enums/enums";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string>("คุณ");
  const [color, setColor] = useState<WebColor>(WebColor.Red);

  useEffect(() => {
    const saved = localStorage.getItem(Name);
    if (saved) setName(saved);
  }, []);

  useEffect(() => {
    if (color) localStorage.setItem(WebQuestionColor, color);
  }, [color]);

  const colorOptions: {
    key: WebColor;
    label: string;
    className: string;
  }[] = [
    {
      key: WebColor.Red,
      label: "แดง",
      className: "bg-sub-red text-main-cream",
    },
    {
      key: WebColor.Orange,
      label: "ส้ม",
      className: "bg-sub-orange text-main-cream",
    },
    { key: WebColor.Yellow, label: "เหลือง", className: "bg-sub-yellow" },
    {
      key: WebColor.Green,
      label: "เขียว",
      className: "bg-sub-green text-main-cream",
    },
    { key: WebColor.Blue, label: "ฟ้า", className: "bg-sub-blue" },
    { key: WebColor.Purple, label: "ม่วง", className: "bg-sub-purple" },
    { key: WebColor.Pink, label: "ชมพู", className: "bg-sub-pink" },
    { key: WebColor.White, label: "ขาว", className: "bg-main-cream" },
  ];

  return (
    <div className="text-center text-subheader space-y-4">
      <div className="text-main-cream">
        <div>ถ้าให้ลองนึกย้อนกลับไป ณ เวลานั้น</div>
        <div>{name}</div>
        <div>เห็นมันเป็นสีอะไรหรอ?</div>
      </div>

      <div className="grid grid-cols-2 gap-5 px-17">
        {colorOptions.map(({ key, label, className }) => (
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
