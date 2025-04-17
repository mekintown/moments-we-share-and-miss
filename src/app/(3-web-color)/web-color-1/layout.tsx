import { PropsWithChildren } from "react";
import NextButton from "@/components/NextButton";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-start-1"></div>
      <div className="row-start-2">{children}</div>
      <div className="row-start-4">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="web-color-2"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};

export default WebColorLayout;
