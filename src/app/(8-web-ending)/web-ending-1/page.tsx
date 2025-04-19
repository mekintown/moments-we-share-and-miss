import NextButton from "@/components/NextButton";

const Page = () => {
  return (
    <>
      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะหน้าจอเพื่อเปิด"
          url="/web-letter"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
