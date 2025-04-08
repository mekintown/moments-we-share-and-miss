import { PropsWithChildren } from "react";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="w-full">{children}</div>
    </>
  );
};

export default WebColorLayout;
