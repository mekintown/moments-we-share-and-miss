import PageWithTapToNext from "@/components/PageWithTapToNext";

const Page = () => {
  return (
    <PageWithTapToNext nextUrl="web-transition-7">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">แม้เวลาจะผ่านไปนานแค่ไหน</div>
        <div className="">แต่หากมองย้อนกลับไป</div>
        <div className="">เรื่องนี้ก็จะยังคงเด่นชัดอยู่เสมอ</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
