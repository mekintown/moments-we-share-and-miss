"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import {
  ImageSrc,
  Location,
  MissedPerson,
  MissedPersonRelationShip,
  Name,
  WebQuestionSound,
} from "@/constants/localStorageConstants";
import { ensureOgImage } from "@/lib/ogPrefetch";
import { LocationType, PersonType } from "@/enums/enums";
import { parentSlugMap, childSlugMap, locationSlugMap } from "@/lib/slugMap";

const Page = () => {
  const [answerSound, setAnswerSound] = useState("");
  const [name, setName] = useState<string | null>("");
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(WebQuestionSound, answerSound);
    setName(localStorage.getItem(Name));
  }, [answerSound]);

  const handleNext = () => {
    const loc = localStorage.getItem(Location) as LocationType | null;
    const who = localStorage.getItem(MissedPerson) as PersonType | null;
    const whom = localStorage.getItem(
      MissedPersonRelationShip
    ) as PersonType | null;

    if (loc && who && whom) {
      const [parent, child] =
        parentSlugMap[who] && childSlugMap[whom]
          ? [parentSlugMap[who], childSlugMap[whom]]
          : [parentSlugMap[whom], childSlugMap[who]];

      const locSlug = locationSlugMap[loc];
      if (parent && child && locSlug) {
        const path = `/memorycards/illustrations/${child}/${child}_${parent}_${locSlug}.webp`;
        localStorage.setItem(ImageSrc, path);
      }
    }

    ensureOgImage();
    router.push("/web-transition-1");
  };

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
        <div className="h-full text-main-cream text-center text-subheader">
          <div>แล้วสำหรับเรื่องราวที่เล่าให้เราฟัง</div>
          <div>เสียงแบบไหนที่ดังก้องอยู่ใน</div>
          <div>ความทรงจำของ {name}</div>

          <div className="h-full py-3">
            <TextAreaWithCounter
              onChange={(e) => setAnswerSound(e.target.value)}
              value={answerSound}
              maxCount={120}
              className="h-8/10"
            />
          </div>
        </div>
      </div>

      <div className="row-start-4">
        <NextButton
          url="/web-transition-1"
          label="ต่อไป"
          disabled={answerSound === ""}
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Page;
