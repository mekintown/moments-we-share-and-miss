import { PropsWithChildren } from "react";

const WebSoundLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="row-span-4 w-full">{children}</div>
    </>
  );
};

export default WebSoundLayout;
