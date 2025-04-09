import { PropsWithChildren } from "react";
import NextButton from "@/components/NextButton";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-start-1"></div>
      <div className="row-start-2">{children}</div>
      <div className="row-start-4">
        <NextButton url="/web-color-2" label="แตะเพื่อไปต่อ" />
      </div>
    </>
  );
};

export default WebColorLayout;
