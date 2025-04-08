import NextButton from "@/components/NextButton";
import { PropsWithChildren } from "react";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">{children}</div>
      <div className="row-start-4">
        <NextButton url="/web-color-5" label="ต่อไป" />
      </div>
    </>
  );
};

export default WebColorLayout;
