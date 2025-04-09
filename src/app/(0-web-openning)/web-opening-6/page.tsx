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

export default function Page() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
  }, [age, gender]);

  return (
    <div className="row-span-2 text-center text-body space-y-5">
      <div className="text-subheader text-main-cream">อายุ</div>
      <div className="">
        <Input
          type="email"
          className="text-main-cream border-2 border-main-cream"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      <div className="text-subheader text-main-cream">เพศ</div>
      <div className="">
        <Select onValueChange={(value) => setGender(value)}>
          <SelectTrigger className="border-2 border-main-cream">
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
  );
}
