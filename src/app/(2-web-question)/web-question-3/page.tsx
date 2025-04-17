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
import { useState, useEffect } from "react";

const Page = () => {
  const parent = ["พ่อ", "แม่", "ยาย/ย่า", "ตา/ปู่", "ป้า", "ลุง"];
  const [name, setName] = useState<string | null>(null);
  const [whom, setWhom] = useState<string | null>(null);
  const [who, setWho] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedWho = localStorage.getItem("who");
    if (savedName) {
      setName(savedName);
    }
    if (savedWho) {
      setWho(savedWho);
    }
  }, []);

  useEffect(() => {
    if (whom) {
      localStorage.setItem("whom", whom);
    }
  }, [whom]);

  const isParentCategory = who && parent.includes(who);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">ความสัมพันธ์ของ</div>
        <div className="">{name} กับคนที่นึกถึง</div>
        <div className="">เป็นแบบไหนกันนะ</div>
        <div className="py-3 ">
          {isParentCategory ? (
            <Select onValueChange={(value) => setWhom(value)}>
              <SelectTrigger className="border-2 border-main-cream !text-main-cream">
                <SelectValue placeholder="เลือกตัวเลือก" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ลูกสาว/หลานสาว">ลูกสาว/หลานสาว</SelectItem>
                  <SelectItem value="ลูกชาย/หลานชาย">ลูกชาย/หลานชาย</SelectItem>
                  <SelectItem value="ลูก/หลาน (ไม่ระบุเพศ)">
                    ลูก/หลาน (ไม่ระบุเพศ)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Select onValueChange={(value) => setWhom(value)}>
              <SelectTrigger className="border-2 border-main-cream text-main-cream">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="พ่อ">พ่อ</SelectItem>
                  <SelectItem value="แม่">แม่</SelectItem>
                  <SelectItem value="ยาย/ย่า">ยาย/ย่า</SelectItem>
                  <SelectItem value="ตา/ปู่">ตา/ปู่</SelectItem>
                  <SelectItem value="ป้า">ป้า</SelectItem>
                  <SelectItem value="ลุง">ลุง</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
      <div className="row-start-4 ">
        <NextButton url="web-question-4" disabled={whom === null} />
      </div>
    </>
  );
};
export default Page;
