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
import { Location } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

const Page = () => {
  const [location, setLocation] = useState<string | null>(null);
  useEffect(() => {
    if (location) {
      localStorage.setItem(Location, location);
    }
  }, [location]);
  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream space-y-3">
        <div className="">แล้วช่วงเวลานั้น เกิดขึ้น...</div>
        <div className="flex justify-center items-center gap-2">
          <span>ที่</span>
          <Select onValueChange={(value) => setLocation(value)}>
            <SelectTrigger className="border-2 border-main-cream text-main-cream">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="บ้าน">บ้าน</SelectItem>
                <SelectItem value="รถ">รถ</SelectItem>
                <SelectItem value="ทะเล">ทะเล</SelectItem>
                <SelectItem value="โรงเรียน">โรงเรียน</SelectItem>
                <SelectItem value="อื่นๆ">อื่นๆ</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="row-start-4 ">
        {location && (
          <NextButton
            variant="ghost"
            label="แตะเพื่อไปต่อ"
            url="web-question-5"
            className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
          />
        )}
      </div>
    </>
  );
};
export default Page;
