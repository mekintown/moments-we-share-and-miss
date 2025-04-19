"use client";

import NextButton from "@/components/NextButton";
import { TextAreaWithCounter } from "@/components/TextAreaWithCounter";
import {
  Age,
  Consent,
  EmailContact,
  Gender,
  Location,
  MissedPerson,
  MissedPersonRelationShip,
  Name,
  PairID,
  userDocRef,
  WebAnswerColor,
  WebAnswerImportant,
  WebAnswerWhy,
  WebQuestionColor,
  WebQuestionSound,
} from "@/constants/localStorageConstants";
import { UserData } from "@/enums/enums";
import { useEffect, useState } from "react";

const Page = () => {
  const [answerSound, setAnswerSound] = useState("");
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    localStorage.setItem(WebQuestionSound, answerSound);
    setName(localStorage.getItem(Name));
  }, [answerSound]);

  const handleNext = async () => {
    const userData: UserData = {
      name: localStorage.getItem(Name) ?? "",
      age: localStorage.getItem(Age) ?? "",
      gender: localStorage.getItem(Gender) ?? "",
      web_question_color: localStorage.getItem(WebQuestionColor) ?? "",
      web_answer_color: localStorage.getItem(WebAnswerColor) ?? "",
      missed_person: localStorage.getItem(MissedPerson) ?? "",
      missed_person_relationship:
        localStorage.getItem(MissedPersonRelationShip) ?? "",
      location: localStorage.getItem(Location) ?? "",
      web_answer_why: localStorage.getItem(WebAnswerWhy) ?? "",
      web_question_sound: localStorage.getItem(WebQuestionSound) ?? "",
      web_answer_important: localStorage.getItem(WebAnswerImportant) ?? "",
      consent: localStorage.getItem(Consent) ?? "",
      email_contact: localStorage.getItem(EmailContact) ?? "",
      pair_id: localStorage.getItem(PairID) ?? null,
    };

    try {
      const res = await fetch("/api/add-user-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Server error:", err.message);
        return;
      }

      const { id } = await res.json();

      localStorage.setItem(userDocRef, id);
    } catch (e) {
      console.error("Network error:", e);
    }
  };

  return (
    <>
      <div className="w-full h-full row-start-2 row-span-2">
        <div className="h-full text-main-cream text-center text-subheader">
          <div className="">แล้วสำหรับเรื่องราวที่เล่าให้เราฟัง</div>
          <div className="">เสียงแบบไหนที่ดังก้องอยู่ใน</div>
          <div className="">ความทรงจำของ {name}</div>
          <div className="h-full py-3">
            <TextAreaWithCounter
              onChange={(e) => {
                setAnswerSound(e.target.value);
              }}
              value={answerSound}
              maxCount={120}
              className="h-8/10"
            />
          </div>
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          url={`/web-transition-1`}
          label="ต่อไป"
          disabled={answerSound === ""}
          onClick={handleNext}
        />
      </div>
    </>
  );
};
export default Page;
