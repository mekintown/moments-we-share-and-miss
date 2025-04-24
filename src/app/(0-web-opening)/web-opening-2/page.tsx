"use client";
import NextButton from "@/components/NextButton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

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
      <div className="row-span-2 row-start-2 overflow-auto self-start">
        <div className="text-body space-y-2">
          <Separator className="bg-main-yellow" />
          <div className="text-main-cream text-center">
            <div className="">เราจึงอยากขอชวนคุณใช้เวลาประมาณ</div>
            <div className="">7 นาทีค่อย ๆ ย้อนกลับไปใน</div>
            <div className="">ห้วงความทรงจำ นึกถึงวันเวลาที่เคยได้</div>
            <div className="">แบ่งปันรอยยิ้ม น้ำตา หรือเสียงหัวเราะ</div>
            <div className="">ร่วมกับคนในครอบครัว</div>
            <div className="">หากให้นึกถึงช่วงเวลาเหล่านั้น</div>
            <div className="">มีเรื่องไหนที่เรายังจำได้อยู่เสมอบ้างนะ…</div>
          </div>
          <Separator className="bg-main-yellow " />

          <div className="text-main-cream text-nowrap text-center">
            <div className="">พื้นที่แห่งนี้เป็นส่วนหนึ่งของ</div>
            <div className="">การศึกษาปริญญานิพนธ์ คณะสถาปัตยกรรมศาสตร์</div>
            <div className="">
              สาขาการออกแบบนิเทศศิลป์ จุฬาลงกรณ์มหาวิทยาลัย
            </div>
            <NextButton
              variant="link"
              label="เกี่ยวกับโปรเจกต์"
              url="/web-opening-3"
              className="!text-body underline"
            />
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="/web-opening-4" />
      </div>
    </>
  );
}
