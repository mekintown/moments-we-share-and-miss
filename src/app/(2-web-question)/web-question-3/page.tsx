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
  const parent = [
    "father",
    "mother",
    "grandmother",
    "grandfather",
    "aunt",
    "uncle",
  ];
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
                  <SelectItem value="daughter_or_niece">
                    ลูกสาว/หลานสาว
                  </SelectItem>
                  <SelectItem value="son_or_nephew">ลูกชาย/หลานชาย</SelectItem>
                  <SelectItem value="child_or_grandchild_neutral">
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
                  <SelectItem value="father">พ่อ</SelectItem>
                  <SelectItem value="mother">แม่</SelectItem>
                  <SelectItem value="grandmother">ยาย/ย่า</SelectItem>
                  <SelectItem value="grandfather">ตา/ปู่</SelectItem>
                  <SelectItem value="aunt">ป้า</SelectItem>
                  <SelectItem value="uncle">ลุง</SelectItem>
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
