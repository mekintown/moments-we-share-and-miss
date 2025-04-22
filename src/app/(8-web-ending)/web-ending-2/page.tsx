"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { colorSlugMap } from "@/lib/slugMap";
import { WebColor } from "@/enums/enums";
import { WebQuestionColor } from "@/constants/localStorageConstants";

const templateSrc = (color: string | null) =>
  `/memorycards/templates/memorycardtemplate-${color ?? "white"}.webp`;

const Page = () => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [blurred, setBlurred] = useState(true);

  useLayoutEffect(() => {
    const color = localStorage.getItem(WebQuestionColor) as WebColor;
    const src = templateSrc(colorSlugMap[color]);
    setImgSrc(src);

    const img = new window.Image();
    img.src = src;
    img.onload = () => setBlurred(false);
  }, []);

  return (
    <>
      <motion.div
        className="row-span-4"
        animate={{ filter: blurred ? "blur(20px)" : "blur(0px)" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center gap-10">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="memory‑card‑template"
              width={1080}
              height={1350}
              className="w-full h-auto object-contain"
              priority
            />
          )}
          <div className="flex space-x-3">
            <Button size="icon" className="bg-main-yellow">
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
