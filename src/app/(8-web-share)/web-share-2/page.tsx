"use client";

import NextButton from "@/components/NextButton";
import { Input } from "@/components/ui/input";
import {
  Name,
  Age,
  Location,
  Gender,
  WebQuestionColor,
  WebAnswerColor,
  MissedPerson,
  MissedPersonRelationShip,
  WebAnswerWhy,
  WebQuestionSound,
  WebAnswerImportant,
  Consent,
  EmailContact,
  PairID,
  userDocRef,
} from "@/constants/localStorageConstants";
import { UserData } from "@/enums/enums";
import { useEffect, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState("");

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

  useEffect(() => {
    localStorage.setItem(EmailContact, email);
  }, [email]);

  useEffect(() => {
    const savedConsent = localStorage.getItem(Consent);
    if (savedConsent) setConsent(savedConsent);
  });

  return (
    <>
      <div className="row-start-2 row-span-2 text-center items-center space-y-5">
        <div className="text-main-cream text-subheader">
          <div className="">หลังอ่านเรื่องราวของคุณ เราอาจ</div>
          <div className="">ติดต่อกลับไปเพื่อแลกเปลี่ยน</div>
          <div className="">มุมมอง และมอบภาพเล็ก ๆ</div>
          <div className="">ที่เป็นตัวแทนช่วงเวลาใน</div>
          <div className="">ความทรงจำของคุณ</div>
        </div>
        <div className="">
          <Input
            type="email"
            className="text-main-cream border-2 border-main-cream placeholder:text-main-cream"
            placeholder={consent === "with_email" ? "อีเมล" : "นามสมมติ"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row-start-4">
        <NextButton
          url="web-share-3"
          onClick={handleNext}
          disabled={email === ""}
        />
      </div>
    </>
  );
};

export default Page;
