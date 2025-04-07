import { PropsWithChildren } from "react";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-lvh">
      <div className="grid grid-rows-4 p-10 h-full place-items-center tracking-normal">
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
