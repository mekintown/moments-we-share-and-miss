"use client";

import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="text-primary row-span-4 text-center text-subheader z-10">
        แม้บางเรื่องจะเลือนราง...
      </div>
      <div>
        <Image
          src={"/illustrations/web-intro-2.webp"}
          alt={"mountains"}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  );
};
export default Page;
