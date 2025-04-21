"use client";
import NextButton from "@/components/NextButton";
import { Button } from "@/components/ui/button";
import { Name, userDocRef } from "@/constants/localStorageConstants";
import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [userRefId, setUserRefId] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem(Name);
    const savedUserRefId = localStorage.getItem(userDocRef);
    if (savedName) setName(savedName);
    if (savedUserRefId) setUserRefId(savedUserRefId);
  }, []);

  const copyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center text-main-cream">
        <div className="text-subheader">
          <div className="">ถ้าอยากให้คนที่ {name}</div>
          <div className="">เขียนถึงส่งต่อเรื่องราวให้กับเรา</div>
          <div className="">สามารถส่งลิงก์นี้ให้เขาได้เลย</div>
        </div>
        <div className="py-10">
          <Button
            variant={"outline"}
            className="bg-transparent border-main-yellow text-main-yellow hover:bg-transparent hover:text-main-yellow"
            onClick={() => {
              copyLink(
                `https://www.themomentsweshareandmiss.com/join/${userRefId}`
              );
            }}
          >
            คัดลอกลิ้งค์
          </Button>
        </div>
        <div className="text-remark">
          <div className="">หมายเหตุ: หากอยากให้เพื่อน ๆ</div>
          <div className="">แบ่งปันเรื่องราวให้กับเราแชร์ลิงก์</div>
          <div className="text-nowrap">
            <span
              className="underline"
              onClick={() => {
                copyLink("https://www.themomentsweshareandmiss.com/");
              }}
            >
              www.themomentsweshareandmiss.com
            </span>
            ได้เลย
          </div>
          <div className="">(จะเป็นคนละลิงก์กับครอบครัว)</div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton url="web-share-4" />
      </div>
    </>
  );
};

export default Page;
