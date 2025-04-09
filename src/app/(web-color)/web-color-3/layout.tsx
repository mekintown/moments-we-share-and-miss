import { PropsWithChildren } from "react";
import NextButton from "@/components/NextButton";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-span-4">{children}</div>
    </>
  );
};

export default WebColorLayout;
