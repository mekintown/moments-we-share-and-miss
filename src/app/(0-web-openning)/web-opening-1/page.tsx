"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <>
      <div className="row-start-1">
        <Image
          src="/logo/logo-full.svg"
          alt="logo-full"
          width={126}
          height={78}
        />
      </div>
      <div className="row-start-2">
        {" "}
        <div className="text-center text-body space-y-2 ">
          <Separator className="bg-main-yellow" />
          <div className="text-main-cream ">
            <div className="">โปรเจกต์ที่มีจุดประสงค์เพื่อสำรวจ</div>
            <div className="">ความสัมพันธ์และความทรงจำที่มี</div>
            <div className="">ร่วมกับคนในครอบครัว</div>
          </div>
          <div className="text-main-yellow">
            <div className="">ระหว่าง ลูกในช่วงวัย 15-25 ปี กับ</div>
            <div className="">พ่อแม่หรือผู้ใหญ่ในบ้าน</div>
          </div>
          <Separator className="bg-main-yellow" />
          <div className="text-main-cream">
            <div className="">เพื่อให้เราได้มองย้อนกลับไป </div>
            <div className="">และเห็นสิ่งที่เคยรู้สึก… แต่ไม่เคยพูดถึง</div>
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="/web-opening-2" />
      </div>
    </>
  );
}
