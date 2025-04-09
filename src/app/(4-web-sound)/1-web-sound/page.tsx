"use client";

import NextButton from "@/components/NextButton";

export default function Page() {
  return (
    <div className=" text-center text-subheader space-y-2">
      <div className="">
        <div className="text-main-cream">ในทุกความทรงจำ</div>
        <div className="text-main-cream">ไม่ได้มีแค่ภาพที่พาเรากลับไป</div>
        <div className="text-main-cream">ในห้วงเวลานั้น</div>
      </div>
      <NextButton url="/web-color-5" label="แตะเพื่อไปต่อ" />
    </div>
  );
}
