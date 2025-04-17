"use client";
import Image from "next/image";

const Page = () => {
  return (
    <div className="row-span-4 items-center justify-center">
      <Image
        src={"/logo/logo-sub.svg"}
        alt="moments-we-miss"
        width={215}
        height={100}
      />
    </div>
  );
};
export default Page;
