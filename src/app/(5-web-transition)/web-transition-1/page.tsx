import PageWithTapToNext from "@/components/PageWithTapToNext";

const Page = () => {
  return (
    <PageWithTapToNext nextUrl="web-transition-2">
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="">อย่างนี้นี่เอง…</div>
        <div className="">ทุกเศษเสี้ยวความทรงจำ</div>
        <div className="">ไม่ว่าจะเป็นภาพ เสียง</div>
        <div className="">หรือความรู้สึก</div>
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
