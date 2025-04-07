"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";

export default function Page() {
  return (
    <div className="row-span-2 text-center text-body space-y-5">
      <div className="text-subheader text-main-cream">อายุ</div>
      <div className="">
        <Input className="text-body text-main-cream" />
      </div>
      <div className="text-subheader text-main-cream">เพศ</div>
      <div className="">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="เลือกตัวเลือก" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
