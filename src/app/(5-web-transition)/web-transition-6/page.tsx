"use client";

import NextButton from "@/components/NextButton";

const Page = () => {
  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">แม้เวลาจะผ่านไปนานแค่ไหน</div>
        <div className="">แต่หากมองย้อนกลับไป</div>
        <div className="">เรื่องนี้ก็จะยังคงเด่นชัดอยู่เสมอ</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-transition-7"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
