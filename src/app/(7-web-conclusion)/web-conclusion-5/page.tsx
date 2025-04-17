import NextButton from "@/components/NextButton";

const Page = () => {
  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-subheader text-main-cream">
        <div className="text-nowrap">หลากหลายเรื่องราว</div>
        <div className="">หลากหลายความทรงจำ</div>
        <div className="">เราอาจจดจำในภาพที่แตกต่างกัน</div>
      </div>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-conclusion-6"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
