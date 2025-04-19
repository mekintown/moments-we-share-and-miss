"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  return (
    <div className="row-span-2 text-center text-body space-y-2">
      <div className="text-subheader text-main-cream">สำหรับผู้ใช้งาน IOS</div>
      <Separator className="bg-main-yellow" />
      <div className="text-body-bold text-main-cream">
        เพื่อประสบการณ์ที่สมบูรณ์
      </div>
      <div className="text-main-cream text-body-bold">
        แนะนำให้ใช้งานผ่าน <span className="text-main-yellow">SAFARI</span>
      </div>
      <div className="text-main-cream text-body-bold">
        และ<span className="text-main-yellow">ซ่อนแถบเครื่องมือ</span>
      </div>
      <Separator className="bg-main-yellow" />
      <div className="gap-3 flex flex-col items-center">
        <Image
          src="/illustrations/ios1.webp"
          alt="ios-1"
          height={100}
          width={210}
        />
        <Image
          src="/illustrations/ios2.webp"
          alt="ios-2"
          height={200}
          width={150}
        />
      </div>
    </div>
  );
}
