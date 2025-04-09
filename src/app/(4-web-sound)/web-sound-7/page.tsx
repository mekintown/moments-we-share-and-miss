"use client";

import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import { useEffect, useState } from "react";

export default function Page() {
  const [sound, setSound] = useState("");
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    localStorage.setItem("sound", sound);
    setName(localStorage.getItem("name"));
  }, [sound]);
  return (
    <>
      <div className="h-full  space-y-3">
        <div className="text-main-cream text-center text-subheader">
          <div className="">แล้วสำหรับเรื่องราวที่เล่าให้เราฟัง</div>
          <div className="">เสียงแบบไหนที่ดังก้องอยู่ใน</div>
          <div className="">ความทรงจำของ {name}</div>
        </div>
        <TextAreaWithCounter
          onChange={(e) => {
            setSound(e.target.value);
          }}
          value={sound}
          maxCount={100}
          className="h-3/4 text-main-cream"
        />
      </div>
    </>
  );
}
