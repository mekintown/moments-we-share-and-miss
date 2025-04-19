"use client";

import NextButton from "@/components/NextButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Name, Who } from "@/constants/localStorageConstants";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);
  const [who, setWho] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    if (who) {
      localStorage.setItem(Who, who);
    }
  }, [who]);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">ในช่วงเวลานั้น</div>
        <div className="">แวบแรก {name} นึกถึง...</div>
        <div className="py-3">
          <Select onValueChange={(value) => setWho(value)}>
            <SelectTrigger className="border-2 border-main-cream !text-main-cream">
              <SelectValue placeholder="เลือกตัวเลือก" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="พ่อ">พ่อ</SelectItem>
                <SelectItem value="แม่">แม่</SelectItem>
                <SelectItem value="ลูกสาว/หลานสาว">ลูกสาว/หลานสาว</SelectItem>
                <SelectItem value="ลูกชาย/หลานชาย">ลูกชาย/หลานชาย</SelectItem>
                <SelectItem value="ลูก/หลาน (ไม่ระบุเพศ)">
                  ลูก/หลาน (ไม่ระบุเพศ)
                </SelectItem>
                <SelectItem value="ยาย/ย่า">ยาย/ย่า</SelectItem>
                <SelectItem value="ตา/ปู่">ตา/ปู่</SelectItem>
                <SelectItem value="ป้า">ป้า</SelectItem>
                <SelectItem value="ลุง">ลุง</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="row-start-4 ">
        <NextButton url="web-question-3" disabled={who === null} />
      </div>
    </>
  );
};
export default Page;
