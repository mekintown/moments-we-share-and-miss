"use client";

import NextButton from "@/components/NextButton";
import Image from "next/image";
import { useState, useEffect } from "react";

const parentSlugMap: Record<string, string> = {
  พ่อ: "dad",
  แม่: "mom",
  "ยาย/ย่า": "grandma",
  "ตา/ปู่": "grandpa",
  ป้า: "mom",
  ลุง: "dad",
};

const childSlugMap: Record<string, string> = {
  "ลูกสาว/หลานสาว": "daughter",
  "ลูกชาย/หลานชาย": "son",
  "ลูก/หลาน (ไม่ระบุเพศ)": "nonbi",
};

const locationSlugMap: Record<string, string> = {
  บ้าน: "house",
  รถ: "car",
  ทะเล: "beach",
  โรงเรียน: "school",
  อื่นๆ: "others",
};

const Page = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [who, setWho] = useState<string | null>(null);
  const [whom, setWhom] = useState<string | null>(null);
  const [why, setWhy] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    const savedWho = localStorage.getItem("who");
    const savedWhom = localStorage.getItem("whom");
    const savedWhy = localStorage.getItem("web_answer_why");

    if (savedLocation) setLocation(savedLocation);
    if (savedWho) setWho(savedWho);
    if (savedWhom) setWhom(savedWhom);
    if (savedWhy) setWhy(savedWhy);
  }, []);

  useEffect(() => {
    if (!who || !whom || !location) return;

    let parent = "";
    let child = "";

    if (parentSlugMap[who]) {
      parent = parentSlugMap[who];
    } else if (childSlugMap[who]) {
      child = childSlugMap[who];
    }

    if (parentSlugMap[whom]) {
      parent = parentSlugMap[whom];
    } else if (childSlugMap[whom]) {
      child = childSlugMap[whom];
    }

    const locationSlug = locationSlugMap[location] ?? "";

    if (child && parent && locationSlug) {
      const constructedSrc = `/memorycards/illustrations/${child}/${child}_${parent}_${locationSlug}.webp`;
      setImageSrc(constructedSrc);
      localStorage.setItem("imageSrc", constructedSrc);

      const img = new window.Image();
      img.src = constructedSrc;
    }
  }, [who, whom, location]);

  return (
    <>
      <div className="row-span-3 text-center items-center text-subheader text-main-cream">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="reveal-image"
            width={300}
            height={300}
            className="mx-auto py-5"
          />
        )}

        {/* TODO: Animate this one after another */}
        <div>เรา...</div>
        <div>
          อยู่ที่ {location} กับ {who}
        </div>
        <div>ตอนที่ {why}</div>
      </div>

      <div className="row-start-4 ">
        <NextButton
          variant="ghost"
          label="แตะเพื่อไปต่อ"
          url="/web-reveal-2"
          className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
        />
      </div>
    </>
  );
};
export default Page;
