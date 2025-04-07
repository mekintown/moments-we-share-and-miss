"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { useEffect, useMemo, useState } from "react";
import AnimatedImage from "./AnimatedImage";
import { usePathname, useRouter } from "next/navigation";

const InteractiveBackground = () => {
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;
  const [bgImgSrc, setBgImgSrc] = useState<string | undefined>();

  useEffect(() => {
    if (!backgroundMapConfig[page]) {
      return;
    }

    const config = backgroundMapConfig[page];

    // Handle stop-motion animation
    if (Array.isArray(config.image)) {
      animateSequence(config.image, config.stopMotionDuration || 1000, () => {
        if (config.redirectTo) {
          router.push(config.redirectTo);
        }
      });
    }
    // Handle static backgrounds with redirect
    else if (config.redirectTo) {
      setBgImgSrc(config.image);
      setTimeout(() => {
        router.push(config.redirectTo as string);
      }, config.stopMotionDuration || 2000);
    }
    // Handle static backgrounds without redirects
    else {
      setBgImgSrc(config.image);
    }
  }, [page, router]);

  const animateSequence = (
    images: string[],
    duration: number,
    callback?: () => void
  ) => {
    images.forEach((image, index) => {
      setTimeout(() => {
        setBgImgSrc(image);
        if (index === images.length - 1 && callback) {
          setTimeout(callback, duration / 2);
        }
      }, index * duration);
    });
  };

  const imagePreloadSrc = useMemo(
    () => backgroundMapConfig[page]?.imagePreload,
    [page]
  );

  return (
    <>
      {bgImgSrc && (
        <AnimatedImage
          src={bgImgSrc}
          preloadSrcs={imagePreloadSrc}
          alt="background-image"
          loading="eager"
          fill
          className="relative -z-50 object-cover"
        />
      )}
    </>
  );
};

export default InteractiveBackground;
