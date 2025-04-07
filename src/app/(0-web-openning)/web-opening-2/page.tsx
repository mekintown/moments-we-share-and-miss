"use client";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="text-center text-body space-y-2">
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream">
        เราจึงอยากขอชวนคุณใช้เวลาประมาณ
        <br /> 7 นาทีค่อย ๆ ย้อนกลับไปใน <br />
        ห้วงความทรงจำ นึกถึงวันเวลาที่เคยได้ <br />
        แบ่งปันรอยยิ้ม น้ำตา หรือเสียงหัวเราะ
        <br />
        ร่วมกับคนในครอบครัว
        <br /> หากให้นึกถึงช่วงเวลาเหล่านั้น
        <br />
        มีเรื่องไหนที่เรายังจำได้อยู่เสมอบ้างนะ…
      </div>
      <Separator className="bg-main-yellow" />
    </div>
  );
}
