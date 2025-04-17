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
  const [name, setName] = useState<string | null>(null);
  const [who, setWho] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  useEffect(() => {
    if (who) {
      localStorage.setItem("who", who);
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
                <SelectItem value="father">พ่อ</SelectItem>
                <SelectItem value="mother">แม่</SelectItem>
                <SelectItem value="daughter_or_niece">
                  ลูกสาว/หลานสาว
                </SelectItem>
                <SelectItem value="son_or_nephew">ลูกชาย/หลานชาย</SelectItem>
                <SelectItem value="child_or_grandchild_neutral">
                  ลูก/หลาน (ไม่ระบุเพศ)
                </SelectItem>
                <SelectItem value="grandmother">ยาย/ย่า</SelectItem>
                <SelectItem value="grandfather">ตา/ปู่</SelectItem>
                <SelectItem value="aunt">ป้า</SelectItem>
                <SelectItem value="uncle">ลุง</SelectItem>
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
