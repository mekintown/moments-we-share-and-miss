"use client";

import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";

export default function Page() {
  const value = "";
  return (
    <>
      <div className="h-full text-main-cream text-center text-subheader space-y-3">
        <div className="">เพราะ</div>
        <TextAreaWithCounter
          onChange={(value) => {}}
          value={value}
          maxCount={100}
          className="h-full"
        />
      </div>
    </>
  );
}
