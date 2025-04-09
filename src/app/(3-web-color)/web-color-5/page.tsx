"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string | null>("");
  const [color, setColor] = useState("");
  useEffect(() => {
    localStorage.setItem("color", color ?? "");
    setName(localStorage.getItem("name"));
  }, [color]);
  return (
    <div className="text-center text-subheader space-y-4">
      <div className="text-main-cream ">
        <div className="">ถ้าให้ลองนึกย้อนกลับไป ณ เวลานั้น</div>
        <div className="">{name}</div>
        <div className="">เห็นมันเป็นสีอะไรหรอ?</div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-17">
        <Link href="/web-color-6">
          <Button
            className="bg-sub-red text-main-cream w-full"
            onClick={() => {
              setColor("red");
            }}
          >
            แดง
          </Button>
        </Link>
        <Link href="/web-color-6">
          <Button
            className="bg-sub-orange text-main-cream w-full"
            onClick={() => {
              setColor("orange");
            }}
          >
            ส้ม
          </Button>
        </Link>
        <Link href="/web-color-6">
          <Button
            className="bg-sub-yellow w-full"
            onClick={() => {
              setColor("yellow");
            }}
          >
            เหลือง
          </Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("green");
          }}
        >
          <Button className="bg-sub-green text-main-cream w-full">เขียว</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("blue");
          }}
        >
          <Button className="bg-sub-blue w-full">ฟ้า</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("purple");
          }}
        >
          <Button className="bg-sub-purple w-full">ม่วง</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("pink");
          }}
        >
          <Button className="bg-sub-pink w-full">ชมพู</Button>
        </Link>
        <Link
          href="/web-color-6"
          onClick={() => {
            setColor("white");
          }}
        >
          <Button className="bg-main-cream w-full">ขาว</Button>
        </Link>
      </div>
    </div>
  );
}
