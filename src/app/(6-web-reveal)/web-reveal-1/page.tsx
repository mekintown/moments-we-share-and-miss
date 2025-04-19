"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import NextButton from "@/components/NextButton";

import {
  ImageSrc,
  Location,
  WebAnswerWhy,
  WebAnswerImportant,
  WebQuestionColor,
  WebAnswerColor,
  WebQuestionSound,
  Who,
  Whom,
} from "@/constants/localStorageConstants";

import { LocationType, PersonType } from "@/enums/enums";
import { parentSlugMap, childSlugMap, locationSlugMap } from "@/lib/slugMap";

const RevealSequence = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [location, setLocation] = useState<LocationType | null>(null);
  const [who, setWho] = useState<PersonType | null>(null);
  const [whom, setWhom] = useState<PersonType | null>(null);
  const [why, setWhy] = useState<string | null>(null);

  const [answerImportant, setAnswerImportant] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [colorAnswer, setColorAnswer] = useState<string | null>(null);
  const [answerSound, setAnswerSound] = useState<string | null>(null);

  const [imageSrc, setImageSrc] = useState<string>(
    "/memorycards/illustrations/daughter/daughter_mom_beach.webp"
  );

  useEffect(() => {
    setLocation(localStorage.getItem(Location) as LocationType | null);
    setWho(localStorage.getItem(Who) as PersonType | null);
    setWhom(localStorage.getItem(Whom) as PersonType | null);
    setWhy(localStorage.getItem(WebAnswerWhy));

    setAnswerImportant(localStorage.getItem(WebAnswerImportant));
    setColor(localStorage.getItem(WebQuestionColor));
    setColorAnswer(localStorage.getItem(WebAnswerColor));
    setAnswerSound(localStorage.getItem(WebQuestionSound));

    const savedImg = localStorage.getItem(ImageSrc);
    if (savedImg) setImageSrc(savedImg);
  }, []);

  useEffect(() => {
    if (!imageSrc && location && who && whom) {
      const [parent, child] =
        parentSlugMap[who] && childSlugMap[whom]
          ? [parentSlugMap[who], childSlugMap[whom]]
          : [parentSlugMap[whom], childSlugMap[who]];

      const locSlug = locationSlugMap[location];
      if (parent && child && locSlug) {
        const constructed = `/memorycards/illustrations/${child}/${child}_${parent}_${locSlug}.webp`;
        setImageSrc(constructed);
        localStorage.setItem(ImageSrc, constructed);
        // warm‑up
        const img = new window.Image();
        img.src = constructed;
      }
    }
  }, [imageSrc, location, who, whom]);

  const renderStepText = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div>เรา…</div>
            <div>
              อยู่ที่ {location} กับ {who}
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
    }
  };

  return (
    <>
      <div className=" absolute top-2  p-10 flex flex-col items-center text-main-cream text-subheader">
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
            {renderStepText()}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="row-start-4">
        {step < 4 ? (
          <button
            onClick={() => setStep((s) => (s + 1) as 2 | 3 | 4)}
            className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
          >
            แตะเพื่อไปต่อ
          </button>
        ) : (
          <NextButton
            variant="ghost"
            label="แตะเพื่อไปต่อ"
            url="/web-conclusion-1"
            className="text-remark text-main-cream opacity-60 hover:opacity-100 hover:text-main-cream hover:bg-transparent"
          />
        )}
      </div>
    </>
  );
};

export default RevealSequence;
