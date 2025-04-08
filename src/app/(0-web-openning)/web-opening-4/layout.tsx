import { PropsWithChildren } from "react";
import Image from "next/image";
import NextButton from "@/components/NextButton";

const WebOpeningLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-start-1">
        <Image
          src="/logo/logo-full.svg"
          alt="logo-full"
          width={126}
          height={78}
        />
      </div>
      <div className="row-start-2">{children}</div>
      <div className="row-start-4">
        <NextButton url="/web-opening-5" />
      </div>
    </>
  );
};

export default WebOpeningLayout;
