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

export default function Page() {
  return (
    <div className="row-span-2 text-center text-body space-y-5">
      <div className="text-subheader text-main-cream">อายุ</div>
      <div className="">
        <Input
          type="email"
          className="text-main-cream border-2 border-main-cream"
        />
      </div>
      <div className="text-subheader text-main-cream">เพศ</div>
      <div className="">
        <Select>
          <SelectTrigger className="border-2 border-main-cream">
            <SelectValue placeholder="เลือกตัวเลือก" />
          </SelectTrigger>
          <SelectContent className="text-body ">
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
