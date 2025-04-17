"use client";
import NextButton from "@/components/NextButton";
import { PropsWithChildren, useEffect, useState } from "react";

const WebQuestionLayout = ({ children }: PropsWithChildren) => {
  const [location, setLocation] = useState<string | null>(null);
  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">{children}</div>
      <div className="row-start-4">
        <NextButton url={`/web-question-${location}`} label="ต่อไป" />
      </div>
    </>
  );
};

export default WebQuestionLayout;
