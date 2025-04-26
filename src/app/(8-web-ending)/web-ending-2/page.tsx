"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import NextButton from "@/components/NextButton";

import { ensureOgImage } from "@/lib/ogPrefetch";
import { WebQuestionColor } from "@/constants/localStorageConstants";
import { BASE_MEDIA_URL } from "@/lib/ogAssets";
import { colorSlugMap } from "@/lib/slugMap";

const getTemplateUrl = () => {
  const stored = localStorage.getItem(WebQuestionColor) as
    | keyof typeof colorSlugMap
    | "";
  const slug = stored ? colorSlugMap[stored] : "blue";
  return `${BASE_MEDIA_URL}/memorycards/templates/memorycardtemplate-${slug}.jpg`;
};

const Page = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const dataUrl = sessionStorage.getItem("ogDataUrl");
    if (dataUrl) {
      setUrl(dataUrl);
      setBlur(false);
      return;
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "ogDataUrl" && e.newValue) {
        setUrl(e.newValue);
        setBlur(false);
      }
    };
    window.addEventListener("storage", onStorage);

    ensureOgImage()
      .then(setUrl)
      .catch(() => {
        setUrl(getTemplateUrl());
      })
      .finally(() => setBlur(false));

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleDownload = () => {
    if (!url) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = `moments-we-miss-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <motion.div
      className="row-span-4"
      animate={{ filter: blur ? "blur(20px)" : "blur(0px)" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {url && (
          <img
            src={url}
            alt="moments_we_miss"
            width={1080}
            height={1920}
            className="object-contain"
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
