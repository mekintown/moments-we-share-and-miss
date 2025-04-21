import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="row-start-2 row-span-2 flex flex-col justify-center items-center text-center text-main-cream space-y-5">
        <div className="text-body">ขอบคุณที่เป็นส่วนหนึ่งของ</div>
        <div className="flex justify-center">
          <Image
            src={"/logo/logo-full.svg"}
            alt="moments-we-miss"
            width={215}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
