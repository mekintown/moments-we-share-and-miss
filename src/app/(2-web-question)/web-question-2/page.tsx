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
import { Name, MissedPerson } from "@/constants/localStorageConstants";
import {
  PersonType,
  ParentType,
  ChildType,
  GrandChildType,
  RelativeType,
} from "@/enums/enums";

import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);
  const [who, setWho] = useState<PersonType | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    if (who) {
      localStorage.setItem(MissedPerson, who);
    }
  }, [who]);

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">ในช่วงเวลานั้น</div>
        <div className="">แวบแรก {name} นึกถึง...</div>
        <div className="py-3">
          <Select onValueChange={(value) => setWho(value as PersonType)}>
            <SelectTrigger className="border-2 border-main-cream !text-main-cream">
              <SelectValue placeholder="เลือกตัวเลือก" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(ParentType).map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}

                {Object.values(ChildType).map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}

                {Object.values(GrandChildType).map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}

                {Object.values(RelativeType).map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
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
