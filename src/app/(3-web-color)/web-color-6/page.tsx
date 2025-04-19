"use client";

import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { Reason } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

export default function Page() {
  const [reason, setReason] = useState("");

  useEffect(() => {
    localStorage.setItem(Reason, reason);
  }, [reason]);
  return (
    <>
      <div className="h-full text-main-cream text-center text-subheader space-y-3">
        <div className="">เพราะ</div>
        <TextAreaWithCounter
          onChange={(e) => {
            setReason(e.target.value);
          }}
          value={reason}
          maxCount={100}
          className="h-full"
        />
      </div>
    </>
  );
}
