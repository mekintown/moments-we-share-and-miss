"use client";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="row-span-2 text-center  space-y-2">
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream text-body">
        <div className="">พื้นที่แห่งเวลาที่ถูกออกแบบมา</div>
        <div className="">ให้คุณ ‘ได้มองกลับไป’</div>
        <div className="">ถึงช่วงเวลาที่คุณเคยได้มีกับใคร</div>
        <div className="">ที่ยังสำคัญกับคุณเสมอ</div>
        <div className="">ไม่ใช่เพียงแค่ให้คุณนึกถึงเขา</div>
        <div className="">และช่วงเวลาเหล่านั้น</div>
        <div className="">แต่เพื่อชวนให้คุณ ‘สะท้อนคิดและตกตะกอน’</div>
        <div className="">สร้างความหมายให้กับช่วงเวลาสำคัญ</div>
        <div className="">ที่คุณอาจจะลืมไป</div>
      </div>
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream text-body">
        <div>เรื่องราวบางส่วนจากพื้นที่แห่งนี้</div>
        <div>จะถูกนำไปถ่ายทอดเพื่อแบ่งปัน</div>
      </div>
      <div className="text-main-yellow text-body-bold">
        <div>‘ให้สิ่งที่ไม่ถูกมองเห็นพร่าเลือน...</div>
        <div>กลับมาเบ่งบาน...อีกครั้ง’</div>
      </div>
      <div className="text-main-cream text-body">
        <div>พบกันในนิทรรศการ</div>
        <div>COMMDE CREATIVE WALK 2025</div>
      </div>
    </div>
  );
}
