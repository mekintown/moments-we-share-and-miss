"use client";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="text-center text-body space-y-2">
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream">
        <div className="">เราจึงอยากขอชวนคุณใช้เวลาประมาณ</div>
        <div className="">7 นาทีค่อย ๆ ย้อนกลับไปใน</div>
        <div className="">ห้วงความทรงจำ นึกถึงวันวลาที่เคยได้</div>
        <div className="">แบ่งปันรอยยิ้ม น้ำตา หรือเสียงหัวเราะ</div>
        <div className="">ร่วมกับคนในครอบครัว</div>
        <div className="">หากให้นึกถึงช่วงเวลาเหล่านั้น</div>
        <div className="">มีเรื่องไหนที่เรายังจำได้อยู่เสมอบ้างนะ…</div>
      </div>
      <Separator className="bg-main-yellow" />
    </div>
  );
}
