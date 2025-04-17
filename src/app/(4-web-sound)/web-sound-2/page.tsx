"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="text-main-cream text-nowrap">
          แต่ยังมี ‘เสียง’ ที่ดังก้องชัดเจนเสมอ
        </div>
        <div className="text-main-cream">ในเหตุการณ์สำคัญของเรา</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-sound-3"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
}
