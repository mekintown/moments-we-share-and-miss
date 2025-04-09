import { PropsWithChildren } from "react";
import Image from "next/image";
import NextButton from "@/components/NextButton";

const WebOpeningLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-start-1"></div>
      <div className="row-start-2">{children}</div>
      <div className="row-start-4">
        <NextButton url="/web-intro-1" />
      </div>
    </>
  );
};

export default WebOpeningLayout;
