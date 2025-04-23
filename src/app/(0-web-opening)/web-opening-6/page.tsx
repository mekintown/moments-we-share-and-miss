"use client";

import NextButton from "@/components/NextButton";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Age, Gender } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

export default function Page() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const isValidAge = (value: string) => {
    const num = Number(value);
    return !isNaN(num) && num > 0 && Number.isInteger(num);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setAge(input);
    }
  };

  useEffect(() => {
    if (isValidAge(age)) {
      localStorage.setItem(Age, age);
    }
    if (gender) {
      localStorage.setItem(Gender, gender);
    }
  }, [age, gender]);

  return (
    <>
      <div className="row-start-2">
        <div className="row-span-2 text-center text-body space-y-5">
          <div className="text-subheader text-main-cream">อายุ</div>
          <div className="">
            <Input
              type="input"
              inputMode="numeric"
              pattern="[0-9]*"
              className="text-main-cream border-2 border-main-cream"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="text-subheader text-main-cream">เพศ</div>
          <div className="">
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="border-2 border-main-cream text-main-cream">
                <SelectValue placeholder="เลือกตัวเลือก" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">ชาย</SelectItem>
                  <SelectItem value="female">หญิง</SelectItem>
                  <SelectItem value="others">ไม่ระบุ</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          label="เริ่มต้น"
          url="/web-intro-1"
          disabled={age === "" || gender === ""}
        />
      </div>
    </>
  );
}
