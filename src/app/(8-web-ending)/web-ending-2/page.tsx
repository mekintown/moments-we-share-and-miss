"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  ImageSrc,
  Location,
  MissedPerson,
  Name,
  WebAnswerColor,
  WebAnswerImportant,
  WebAnswerWhy,
  WebQuestionColor,
  WebQuestionSound,
} from "@/constants/localStorageConstants";
import Image from "next/image";
import { WebColor } from "@/enums/enums";
import { colorSlugMap } from "@/lib/slugMap";

const Page = () => {
  const [ogImageUrl, setOgImageUrl] = useState("");
  const [blurred, setBlurred] = useState(true);
  useEffect(() => {
    try {
      const storageItems = {
        name: localStorage.getItem(Name) || "",
        missedPerson: localStorage.getItem(MissedPerson) || "",
        webQuestionColor:
          (localStorage.getItem(WebQuestionColor) as WebColor) || "",
        webAnswerColor: localStorage.getItem(WebAnswerColor) || "",
        webAnswerImportant: localStorage.getItem(WebAnswerImportant) || "",
        webAnswerWhy: localStorage.getItem(WebAnswerWhy) || "",
        location: localStorage.getItem(Location) || "",
        webQuestionSound: localStorage.getItem(WebQuestionSound) || "",
        imageSrc: localStorage.getItem(ImageSrc) || "",
      };

      const urlParams = new URLSearchParams();

      if (storageItems.name) urlParams.append(Name, storageItems.name);
      if (storageItems.webQuestionColor)
        urlParams.append(
          WebQuestionColor,
          colorSlugMap[storageItems.webQuestionColor]
        );
      if (storageItems.missedPerson)
        urlParams.append(MissedPerson, storageItems.missedPerson);
      if (storageItems.location)
        urlParams.append(Location, storageItems.location);
      if (storageItems.webAnswerColor)
        urlParams.append(WebAnswerColor, storageItems.webAnswerColor);
      if (storageItems.webQuestionSound)
        urlParams.append(WebQuestionSound, storageItems.webQuestionSound);
      if (storageItems.webAnswerImportant)
        urlParams.append(WebAnswerImportant, storageItems.webAnswerImportant);
      if (storageItems.webAnswerWhy)
        urlParams.append(WebAnswerWhy, storageItems.webAnswerWhy);
      if (storageItems.imageSrc)
        urlParams.append(
          ImageSrc,
          storageItems.imageSrc.replace(/\.webp$/, ".png")
        );

      setOgImageUrl(`/api/og?${urlParams.toString()}`);
      setBlurred(false);
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      setOgImageUrl("/api/og?color=white");
    }
  }, []);

  const handleDownload = async () => {
    if (!ogImageUrl) return;

    try {
      const response = await fetch(ogImageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = `moments-we-miss-${new Date().getTime()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <motion.div
        className="row-span-4"
        animate={{ filter: blurred ? "blur(20px)" : "blur(0px)" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center gap-10">
          {ogImageUrl && (
            <Image
              src={ogImageUrl}
              alt="moments_we_miss"
              width={1080}
              height={1920}
            />
          )}
          <div className="flex space-x-3">
            <Button
              size="icon"
              className="bg-main-yellow"
              onClick={handleDownload}
            >
              <Download style={{ scale: 1.25 }} />
            </Button>
            <NextButton url="web-ending-3" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Page;
