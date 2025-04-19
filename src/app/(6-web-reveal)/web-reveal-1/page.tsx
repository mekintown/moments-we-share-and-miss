"use client";

import NextButton from "@/components/NextButton";
import {
  ImageSrc,
  Location,
  WebAnswerWhy,
  Who,
  Whom,
} from "@/constants/localStorageConstants";
import { LocationType, PersonType } from "@/enums/enums";
import { parentSlugMap, childSlugMap, locationSlugMap } from "@/lib/slugMap";
import Image from "next/image";
import { useState, useEffect } from "react";

const Page = () => {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [who, setWho] = useState<PersonType | null>(null);
  const [whom, setWhom] = useState<PersonType | null>(null);
  const [why, setWhy] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const savedLocation = localStorage.getItem(Location);
    const savedWho = localStorage.getItem(Who);
    const savedWhom = localStorage.getItem(Whom);
    const savedWhy = localStorage.getItem(WebAnswerWhy);

    if (savedLocation) {
      setLocation(savedLocation as LocationType);
    }

    if (savedWho) {
      setWho(savedWho as PersonType);
    }

    if (savedWhom) {
      setWhom(savedWhom as PersonType);
    }

    if (savedWhy) setWhy(savedWhy);
  }, []);

  useEffect(() => {
    if (!who || !whom || !location) return;

    const [parent, child] =
      parentSlugMap[who] && childSlugMap[whom]
        ? [parentSlugMap[who], childSlugMap[whom]]
        : [parentSlugMap[whom], childSlugMap[who]];

    const locationSlug = locationSlugMap[location] ?? "";

    if (child && parent && locationSlug) {
      const constructedSrc = `/memorycards/illustrations/${child}/${child}_${parent}_${locationSlug}.webp`;
      setImageSrc(constructedSrc);
      localStorage.setItem(ImageSrc, constructedSrc);

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
