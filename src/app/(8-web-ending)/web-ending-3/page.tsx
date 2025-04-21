import PageWithTapToNext from "@/components/PageWithTapToNext";

const Page = () => {
  return (
    <PageWithTapToNext nextUrl="web-share-1">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">ขอบคุณที่มาแบ่งปัน</div>
        <div className="">ช่วงเวลาดี ๆ กับเรานะ</div>
      </div>
    </PageWithTapToNext>
  );
};

export default Page;
