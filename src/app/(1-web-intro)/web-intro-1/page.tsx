import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="text-primary row-span-4 text-center text-subheader">
        ชีวิตของเรา <br /> เต็มไปด้วยความทรงจำมากมาย…
      </div>
      <Image
        src={"/illustrations/web-intro-1.webp"}
        alt={"mountains"}
        layout="fill"
        objectFit="cover"
      ></Image>
    </>
  );
};
export default Page;
