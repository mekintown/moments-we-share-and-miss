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
import {
  Name,
  MissedPerson,
  MissedPersonRelationShip,
} from "@/constants/localStorageConstants";
import {
  ParentType,
  RelativeType,
  ChildType,
  GrandChildType,
  PersonType,
} from "@/enums/enums"; // adjust path
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState<string | null>(null);
  const [who, setWho] = useState<PersonType | null>(null);
  const [whom, setWhom] = useState<PersonType | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    const savedWho = localStorage.getItem(MissedPerson);

    if (savedName) setName(savedName);
    if (savedWho) {
      setWho(savedWho as PersonType);
    }
  }, []);

  useEffect(() => {
    if (whom) {
      localStorage.setItem(MissedPersonRelationShip, whom);
    }
  }, [whom]);

  const isParentOrRelative =
    who &&
    (Object.values(ParentType).includes(who as ParentType) ||
      Object.values(RelativeType).includes(who as RelativeType));

  const childAndGrandOptions = [
    ...Object.values(ChildType),
    ...Object.values(GrandChildType),
  ];

  const parentAndRelativeOptions = [
    ...Object.values(ParentType),
    ...Object.values(RelativeType),
  ];

  return (
    <>
      <div className="row-start-2 row-span-2 text-center text-subheader text-main-cream">
        <div className="">ความสัมพันธ์ของ</div>
        <div className="">{name} กับคนที่นึกถึง</div>
        <div className="">เป็นแบบไหนกันนะ</div>
        <div className="py-3 ">
          <Select onValueChange={(value) => setWhom(value as PersonType)}>
            <SelectTrigger className="border-2 border-main-cream !text-main-cream">
              <SelectValue placeholder="เลือกตัวเลือก" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {(isParentOrRelative
                  ? childAndGrandOptions
                  : parentAndRelativeOptions
                ).map((value) => (
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
        <NextButton url="web-question-4" disabled={whom === null} />
      </div>
    </>
  );
};

export default Page;
