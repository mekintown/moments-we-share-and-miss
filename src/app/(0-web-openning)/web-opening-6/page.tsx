"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import Image from "next/image";
import NextButton from "@/components/NextButton";
import { Age, Gender } from "@/constants/localStorageConstants";

export default function Page() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    localStorage.setItem(Age, age);
    localStorage.setItem(Gender, gender);
  }, [age, gender]);

  return (
    <>
      <div className="row-start-1"></div>
      <div className="row-start-2">
        <div className="row-span-2 text-center text-body space-y-5">
          <div className="text-subheader text-main-cream">อายุ</div>
          <div className="">
            <Input
              type="input"
              className="text-main-cream border-2 border-main-cream"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="text-subheader text-main-cream">เพศ</div>
          <div className="">
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="border-2 border-main-cream text-main-cream">
                <SelectValue placeholder="" />
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
        <NextButton url="/web-intro-1" />
      </div>
    </>
  );
}
