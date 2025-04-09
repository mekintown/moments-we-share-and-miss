import { PropsWithChildren } from "react";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-span-4 w-full">{children}</div>
    </>
  );
};

export default WebColorLayout;
