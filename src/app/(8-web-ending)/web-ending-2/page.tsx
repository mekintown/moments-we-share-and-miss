"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextButton from "@/components/NextButton";

import {
  CustomLocation,
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

import { colorSlugMap } from "@/lib/slugMap";

type BlobUrl = { url: string; blob: Blob };

const Page = () => {
  const [img, setImg] = useState<BlobUrl | null>(null);
  const [blurred, setBlur] = useState(true);

  const buildPayload = () => {
    const ls = (k: string) => localStorage.getItem(k) || "";

    const locEnum = ls(Location);
    const location = locEnum === "อื่นๆ" ? ls(CustomLocation) : locEnum;

    const colorEnum = ls(WebQuestionColor) as keyof typeof colorSlugMap | "";
    const colorSlug = colorEnum ? colorSlugMap[colorEnum] : "blue";

    return {
      name: ls(Name),
      missedPerson: ls(MissedPerson),
      location,
      webAnswerColor: ls(WebAnswerColor),
      webAnswerImportant: ls(WebAnswerImportant),
      webAnswerWhy: ls(WebAnswerWhy),
      webQuestionSound: ls(WebQuestionSound),
      webQuestionColor: colorSlug,
      imageSrc: ls(ImageSrc).replace(/\.webp$/, ".png"),
    };
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/og", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        });
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setImg({ url, blob });
      } catch (err) {
        console.error("OG fetch failed:", err);
      } finally {
        setBlur(false);
      }
    })();
  }, []);

  const handleDownload = () => {
    if (!img) return;
    const a = document.createElement("a");
    a.href = img.url;
    a.download = `moments-we-miss-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <motion.div
      className="row-span-4"
      animate={{ filter: blurred ? "blur(20px)" : "blur(0px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {img && (
          <Image
            src={img.url}
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
  );
};

export default Page;
