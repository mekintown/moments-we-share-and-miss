"use client";
import NextButton from "@/components/NextButton";
import { Color } from "@/constants/localStorageConstants";
import { PropsWithChildren, useEffect, useState } from "react";

const WebColorLayout = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<string | null>(null);

  useEffect(() => {
    const savedColor = localStorage.getItem(Color);
    setColor(savedColor);
  }, []);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">{children}</div>
      <div className="row-start-4">
        <NextButton url={`/web-color-${color}`} label="ต่อไป" />
      </div>
    </>
  );
};

export default WebColorLayout;
