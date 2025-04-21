"use client";

import NextButton from "@/components/NextButton";
import { Input } from "@/components/ui/input";
import { Name } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem(Name, name);
  }, [name]);

  return (
    <>
      <div className="row-start-2 row-span-2">
        <div className="row-span-2 text-center text-body space-y-5">
          <div className="text-subheader text-main-cream">
            <div className="">ก่อนย้อนความทรงจำไปด้วยกัน</div>
            <div className="">ขอทำความรู้จักกันสักนิด</div>
            <div className="">อยากให้เราเรียกคุณว่าอะไร?</div>
          </div>
          <div className="">
            <Input
              type="input"
              className="text-main-cream border-2 border-main-cream"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="/web-opening-6" disabled={name === ""} />
      </div>
    </>
  );
}
