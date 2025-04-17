"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="text-main-cream">หรือแม้แต่เสียงความเงียบงัน</div>
        <div className="text-main-cream">ที่ดังก้องในยามที่แม่กล่อมเราหลับ</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-sound-7"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
}
