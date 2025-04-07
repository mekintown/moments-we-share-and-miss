"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      className="row-span-2 text-center text-body space-y-2"
    >
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream">
        พื้นที่แห่งเวลาที่ถูกออกแบบมา
        <br /> ให้คุณ ‘ได้มองกลับไป’
        <br />
        ถึงช่วงเวลาที่คุณเคยได้มีกับใคร
        <br /> ที่ยังสำคัญกับคุณเสมอ
        <br />
        ไม่ใช่เพียงแค่ให้คุณนึกถึงเขา
        <br /> และช่วงเวลาเหล่านั้น
        <br /> แต่เพื่อชวนให้คุณ ‘สะท้อนคิดและตกตะกอน’
        <br /> สร้างความหมายให้กับช่วงเวลาสำคัญ
        <br />
        ที่คุณอาจจะลืมไป
      </div>
      <Separator className="bg-main-yellow" />
      <div className="text-main-cream">
        เรื่องราวบางส่วนจากพื้นที่แห่งนี้
        <br /> จะถูกนำไปถ่ายทอดเพื่อแบ่งปัน
      </div>
      <div className="text-main-yellow text-body-bold">
        ‘ให้สิ่งที่ไม่ถูกมองเห็นพร่าเลือน...
        <br /> กลับมาเบ่งบาน...อีกครั้ง’
      </div>
      <div className="text-main-cream">
        พบกันในนิทรรศการ
        <br /> COMMDE CREATIVE WALK 2025
      </div>
    </motion.div>
  );
}
