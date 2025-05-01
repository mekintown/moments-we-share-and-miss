"use client";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PageWithTapToNext from "@/components/PageWithTapToNext";

import {
  ImageSrc,
  Location,
  WebAnswerWhy,
  WebAnswerImportant,
  WebQuestionColor,
  WebAnswerColor,
  WebQuestionSound,
  MissedPerson,
  MissedPersonRelationShip,
  CustomLocation,
} from "@/constants/localStorageConstants";
import { LocationType, PersonType } from "@/enums/enums";
import { parentSlugMap, childSlugMap, locationSlugMap } from "@/lib/slugMap";

const RevealSequence = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [location, setLocation] = useState<LocationType | null>(null);
  const [customLocation, setCustomLocation] = useState<string | null>(null);
  const [who, setWho] = useState<PersonType | null>(null);
  const [whom, setWhom] = useState<PersonType | null>(null);
  const [why, setWhy] = useState<string | null>(null);
  const [answerImportant, setImportant] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [colorAnswer, setColorAnswer] = useState<string | null>(null);
  const [answerSound, setAnswerSound] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState(
    "/memorycards/illustrations/daughter/daughter_mom_beach.webp"
  );

  useLayoutEffect(() => {
    setLocation(localStorage.getItem(Location) as LocationType | null);
    setCustomLocation(localStorage.getItem(CustomLocation));
    setWho(localStorage.getItem(MissedPerson) as PersonType | null);
    setWhom(
      localStorage.getItem(MissedPersonRelationShip) as PersonType | null
    );
    setWhy(localStorage.getItem(WebAnswerWhy));

    setImportant(localStorage.getItem(WebAnswerImportant));
    setColor(localStorage.getItem(WebQuestionColor));
    setColorAnswer(localStorage.getItem(WebAnswerColor));
    setAnswerSound(localStorage.getItem(WebQuestionSound));
  }, []);

  useLayoutEffect(() => {
    if (location && who && whom) {
      const [parent, child] =
        parentSlugMap[who] && childSlugMap[whom]
          ? [parentSlugMap[who], childSlugMap[whom]]
          : [parentSlugMap[whom], childSlugMap[who]];

      const locSlug = locationSlugMap[location];
      if (parent && child && locSlug) {
        const path = `/memorycards/illustrations/${child}/${child}_${parent}_${locSlug}.webp`;
        setImageSrc(path);
        localStorage.setItem(ImageSrc, path);
        new window.Image().src = path; // warm-up
      }
    }
  }, [location, who, whom]);

  const nextStep = () => setStep((s) => (s + 1) as 2 | 3 | 4);

  const render = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>เรา…</div>
            <div>
              อยู่ที่{" "}
              {location !== LocationType.Others ? location : customLocation} กับ{" "}
              {who}
            </div>
            <div>ตอนที่ {why}</div>
          </>
        );
      case 2:
        return <div>{answerImportant}</div>;
      case 3:
        return (
          <>
            <div>ช่วงเวลานี้เหมือนสี {color}</div>
            <div>เพราะ {colorAnswer}</div>
          </>
        );
      case 4:
        return <div>เสียงที่เราจำได้คือ {answerSound}</div>;
      default:
        return;
    }
  };

  return (
    <PageWithTapToNext
      nextUrl="/web-conclusion-1"
      enabled={step === 4}
      label="แตะเพื่อไปต่อ"
    >
      {step < 4 && (
        <button
          aria-label="แตะเพื่อไปต่อ"
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={nextStep}
        />
      )}

      <div className="absolute top-6 p-10 flex flex-col items-center text-main-cream text-subheader">
        <Image
          src={imageSrc}
          alt="memory"
          width={300}
          height={300}
          className="w-[300px] h-[300px] object-contain"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWithTapToNext>
  );
};

export default RevealSequence;
