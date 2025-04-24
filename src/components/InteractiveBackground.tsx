"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import BackgroundLayer from "./BackgroundLayer";

interface LayerInfo {
  key: string;
  isVideo: boolean;
  src: string;
  preloadSrcs?: string[];
  onVideoEnd?: () => void;
}

const InteractiveBackground = () => {
  const path = usePathname();
  const router = useRouter();
  const page = path.split("/")[1] as keyof typeof backgroundMapConfig;

  const [prevBg, setPrevBg] = useState<LayerInfo | null>(null);
  const [activeBg, setActiveBg] = useState<LayerInfo | null>(null);

  const config = backgroundMapConfig[page];

  useEffect(() => {
    if (!config) return;

    setPrevBg(activeBg || null);

    if (config.video) {
      setVideoBackground();
    } else if (config.stopMotionImages) {
      setStopMotionBackground();
    } else if (config.redirectTo) {
      setStaticImageWithRedirect();
    } else {
      setStaticImage();
    }
  }, [page, config]);

  useEffect(() => {
    if (prevBg && activeBg && prevBg.key === activeBg.key) {
      setPrevBg(null);
    }
  }, [prevBg, activeBg]);

  const setVideoBackground = () => {
    setActiveBg({
      key: `video-${page}-${Date.now()}`,
      isVideo: true,
      src: !Array.isArray(config.image) ? config.image : "",
      preloadSrcs: config.imagesPreload,
      onVideoEnd: handleVideoEnd,
    });
  };

  const setStopMotionBackground = () => {
    const images = config.stopMotionImages!;
    setActiveBg({
      key: `image-seq-${page}-${Date.now()}`,
      isVideo: false,
      src: config.image[0],
      preloadSrcs: config.imagesPreload,
    });
    runImageSequence(images, config.stopMotionDuration || 2000, () => {
      if (config.redirectTo) {
        router.push(config.redirectTo);
      }
    });
  };

  const setStaticImageWithRedirect = () => {
    setActiveBg({
      key: `image-redirect-${page}-${Date.now()}`,
      isVideo: false,
      src: config.image,
      preloadSrcs: config.imagesPreload,
    });
    setTimeout(() => {
      router.push(config.redirectTo as string);
    }, config.stopMotionDuration || 2500);
  };

  const setStaticImage = () => {
    setActiveBg({
      key: `image-${page}-${Date.now()}`,
      isVideo: false,
      src: config.image,
      preloadSrcs: config.imagesPreload,
    });
  };

  const handleExitComplete = () => {
    setPrevBg(null);
  };

  const handleVideoEnd = useCallback(() => {
    if (config?.redirectTo) {
      router.push(config.redirectTo);
    }
  }, [config, router]);

  const runImageSequence = (
    images: string[],
    duration: number,
    callback?: () => void
  ) => {
    images.forEach((image, index) => {
      setTimeout(() => {
        setPrevBg((old) => (old === null ? null : { ...old }));
        setActiveBg({
          key: `image-sequence-${page}-${index}-${Date.now()}`,
          isVideo: false,
          src: image,
          preloadSrcs: config?.imagesPreload,
        });
        if (index === images.length - 1 && callback) {
          setTimeout(callback, duration / 2);
        }
      }, index * duration);
    });
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {prevBg && (
        <BackgroundLayer
          key={prevBg.key}
          isVideo={prevBg.isVideo}
          src={prevBg.src}
          preloadSrcs={prevBg.preloadSrcs}
          onVideoEnd={prevBg.onVideoEnd}
        />
      )}
      {activeBg && (
        <BackgroundLayer
          key={activeBg.key}
          isVideo={activeBg.isVideo}
          src={activeBg.src}
          preloadSrcs={activeBg.preloadSrcs}
          onVideoEnd={activeBg.onVideoEnd}
        />
      )}
    </AnimatePresence>
  );
};

export default InteractiveBackground;
