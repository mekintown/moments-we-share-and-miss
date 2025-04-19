"use client";
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
        <div className="row-span-2 text-center text-body space-y-2">
          <div className="text-subheader text-main-cream">
            สำหรับผู้ใช้งาน IOS
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="/web-opening-5" />
      </div>
    </>
  );
}
