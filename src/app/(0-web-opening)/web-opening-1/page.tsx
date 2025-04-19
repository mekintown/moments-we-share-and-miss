"use client";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
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
  );
}
