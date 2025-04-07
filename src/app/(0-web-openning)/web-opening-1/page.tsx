"use client";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="text-center text-body space-y-2">
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream ">
        โปรเจกต์ที่มีจุดประสงค์เพื่อสำรวจ
        <br />
        ความสัมพันธ์และความทรงจำที่มี
        <br />
        ร่วมกับคนในครอบครัว 
      </div>
      <div className="text-main-yellow">
        ระหว่าง ลูกในช่วงวัย 15–25 ปี กับ
        <br /> พ่อแม่หรือผู้ใหญ่ในบ้าน
      </div>
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream">
        เพื่อให้เราได้มองย้อนกลับไป <br />
        และเห็นสิ่งที่เคยรู้สึก… แต่ไม่เคยพูดถึง
      </div>
    </div>
  );
}
