"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  const name = "PLACEHOLDER";
  return (
    <div className="text-center text-subheader space-y-4">
      <div className="text-main-cream ">
        <div className="">ถ้าให้ลองนึกย้อนกลับไป ณ เวลานั้น</div>
        <div className="">{name}</div>
        <div className="">เห็นมันเป็นสีอะไรหรอ?</div>
      </div>
      <div className="grid grid-cols-2 gap-5 px-17">
        <div>
          <Button className="bg-sub-red text-main-cream w-full">แดง</Button>
        </div>
        <div>
          <Button className="bg-sub-orange text-main-cream w-full">ส้ม</Button>
        </div>
        <div>
          <Button className="bg-sub-yellow w-full">เหลือง</Button>
        </div>
        <div>
          <Button className="bg-sub-green text-main-cream w-full">เขียว</Button>
        </div>
        <div>
          <Button className="bg-sub-blue w-full">ฟ้า</Button>
        </div>
        <div>
          <Button className="bg-sub-purple w-full">ม่วง</Button>
        </div>
        <div>
          <Button className="bg-sub-pink w-full">ชมพู</Button>
        </div>
        <div>
          <Button className="bg-main-cream w-full">ขาว</Button>
        </div>
      </div>
    </div>
  );
}
