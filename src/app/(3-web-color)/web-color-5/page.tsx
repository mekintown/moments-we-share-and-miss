"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>("");
  const [color, setColor] = useState("");

  useEffect(() => {
    localStorage.setItem("web_question_color", color ?? "");
    setName(localStorage.getItem("name"));
  }, [color]);

  return (
    <div className="w-full row-span-4 text-center text-subheader space-y-4">
      <div className="text-main-cream ">
        <div className="text-nowrap">ถ้าให้ลองนึกย้อนกลับไป ณ เวลานั้น</div>
        <div className="">{name}</div>
        <div className="">เห็นมันเป็นสีอะไรหรอ?</div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-17">
        <Link href="/web-color-6">
          <Button
            className="bg-sub-red text-main-cream w-full"
            onClick={() => {
              setColor("แดง");
            }}
          >
            แดง
          </Button>
        </Link>
        <Link href="/web-color-6">
          <Button
            className="bg-sub-orange text-main-cream w-full"
            onClick={() => {
              setColor("ส้ม");
            }}
          >
            ส้ม
          </Button>
        </Link>
        <Link href="/web-color-6">
          <Button
            className="bg-sub-yellow w-full"
            onClick={() => {
              setColor("เหลือง");
            }}
          >
            เหลือง
          </Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("เขียว");
          }}
        >
          <Button className="bg-sub-green text-main-cream w-full">เขียว</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("ฟ้า");
          }}
        >
          <Button className="bg-sub-blue w-full">ฟ้า</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("ม่วง");
          }}
        >
          <Button className="bg-sub-purple w-full">ม่วง</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("ชมพู");
          }}
        >
          <Button className="bg-sub-pink w-full">ชมพู</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("ขาว");
          }}
        >
          <Button className="bg-main-cream w-full">ขาว</Button>
        </Link>
      </div>
    </div>
  );
}
