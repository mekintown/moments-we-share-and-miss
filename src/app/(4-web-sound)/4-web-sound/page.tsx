"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <div className=" text-center text-subheader space-y-2">
      <div className="">
        <div className="text-main-cream">เสียงหัวเราะของคุณแม่ที่หัวเราะ</div>
        <div className="text-main-cream">ไปกับมุก (ไม่) ฮาของคุณพ่อ</div>
      </div>
      <NextButton url="/web-color-5" label="แตะเพื่อไปต่อ" />
    </div>
  );
}
