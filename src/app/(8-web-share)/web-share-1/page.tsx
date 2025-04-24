"use client";

import NextButton from "@/components/NextButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Consent } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

const Page = () => {
  const [consent, setConsent] = useState("");

  useEffect(() => {
    localStorage.setItem(Consent, consent);
  }, [consent]);

  return (
    <>
      <div className="row-start-2 row-span-2 items-center text-main-cream space-y-10">
        <div className="text-subheader text-center">
          <div className="">เรากำลังรวบรวมเรื่องราวจริง</div>
          <div className="">ของครอบครัวเพื่อนำไปแสดง</div>
          <div className="">ในนิทรรศการปริญญานิพนธ์</div>
        </div>

        <RadioGroup
          className="text-body space-y-5"
          defaultValue="option1"
          onValueChange={(value) => {
            setConsent(value);
          }}
        >
          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="with_email"
              id="option1"
              className="rounded-none border-main-cream mt-1"
            />
            <label htmlFor="option1" className="text-left">
              <div>ยินยอมให้นำเรื่องราวไปใช้เพื่อ</div>
              <div>การศึกษาและเผยแพร่ในนิทรรศการ</div>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="without_email"
              id="option2"
              className="rounded-none border-main-cream mt-1"
            />
            <label htmlFor="option2" className="text-left">
              <div>ยินยอมให้นำเรื่องราวไปใช้เพื่อ</div>
              <div>การศึกษาและเผยแพร่ในนิทรรศการ</div>
              <div>แต่ประสงค์ใช้นามสมมติในการเผยแพร่</div>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="none"
              id="option3"
              className="rounded-none border-main-cream mt-1"
            />
            <label htmlFor="option3" className="text-left">
              <div className="">
                <div>ไม่สะดวกให้นำเรื่องราวไปเผยแพร่</div>
                <div>ในนิทรรศการ</div>
              </div>
            </label>
          </div>
        </RadioGroup>
      </div>
      <div className="row-start-4">
        <NextButton
          url={consent !== "none" ? "web-share-2" : "web-share-4"}
          label="ต่อไป"
          disabled={consent === ""}
        />
      </div>
    </>
  );
};

export default Page;
