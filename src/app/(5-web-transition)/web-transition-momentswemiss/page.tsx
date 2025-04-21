"use client";
import PageWithTapToNext from "@/components/PageWithTapToNext";
import Image from "next/image";

const Page = () => {
  return (
    <PageWithTapToNext nextUrl="web-reveal-1">
      <div className="row-span-4 items-center justify-center">
        <Image
          src={"/logo/logo-sub.svg"}
          alt="moments-we-miss"
          width={215}
          height={100}
        />
      </div>
    </PageWithTapToNext>
  );
};
export default Page;
