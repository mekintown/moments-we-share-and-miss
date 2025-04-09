"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <div className=" text-center text-subheader space-y-2">
      <div className="">
        <div className="text-main-cream">หรือแม้แต่เสียงความเงียบงัน</div>
        <div className="text-main-cream">ที่ดังก้องในยามที่แม่กล่อมเราหลับ</div>
      </div>
      <NextButton url="/web-sound-7" label="แตะเพื่อไปต่อ" />
    </div>
  );
}
