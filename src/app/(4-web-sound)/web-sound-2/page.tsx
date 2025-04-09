"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <div className=" text-center text-subheader space-y-2">
      <div className="">
        <div className="text-main-cream">
          แต่ยังมี ‘เสียง’ ที่ดังก้องชัดเจนเสมอ
        </div>
        <div className="text-main-cream">ในเหตุการณ์สำคัญของเรา</div>
      </div>
      <NextButton url="/web-sound-3" label="แตะเพื่อไปต่อ" />
    </div>
  );
}
