"use client";

import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="text-primary row-span-4 text-center text-subheader z-10">
        ชีวิตของเรา <br /> เต็มไปด้วยความทรงจำมากมาย…
      </div>
      <div>
        <Image
          src={"/illustrations/web-intro-1.webp"}
          alt={"mountains"}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
    </>
  );
};
export default Page;
