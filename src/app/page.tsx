import NextButton from "@/components/NextButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="row-start-2">
        <Image
          src="/logo/logo-full.svg"
          alt="logo-full"
          width={250}
          height={250}
        />
      </div>
      <div className="row-start-4">
        <NextButton label="เริ่มต้น" url="/web-opening-1 " />
      </div>
    </>
  );
}
