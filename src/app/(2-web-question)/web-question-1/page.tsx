"use client";

import NextButton from "@/components/NextButton";
import PageWithTapToNext from "@/components/PageWithTapToNext";

const Page = () => {
  return (
    <PageWithTapToNext nextUrl={"/web-question-2"}>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">ช่วงเวลาที่คุณยังจำได้เสมอ</div>
        <div className="">แม้มันจะผ่านไปนานแล้วก็ตาม</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
