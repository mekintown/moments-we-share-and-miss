"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { useCallback, useEffect, useMemo, useState } from "react";
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

  const handleVideoEnd = useCallback(() => {
    if (config?.redirectTo) {
      router.push(config.redirectTo);
    }
  }, [config, router]);

  const animateSequence = (
    images: string[],
    duration: number,
    callback?: () => void
  ) => {
    images.forEach((image, index) => {
      setTimeout(() => {
        // Each new frame => fade from old activeBg to new activeBg
        setPrevBg((old) => (old === null ? null : { ...old }));
        setActiveBg((oldActive) => ({
          key: `image-sequence-${page}-${index}-${Date.now()}`,
          isVideo: false,
          src: image,
          preloadSrcs: config?.imagesPreload,
        }));
        if (index === images.length - 1 && callback) {
          setTimeout(callback, duration / 2);
        }
      }, index * duration);
    });
  };

  useEffect(() => {
    if (!config) return;

    setPrevBg(activeBg || null);

    if (config.video) {
      // if it’s a video
      setActiveBg({
        key: `video-${page}-${Date.now()}`,
        isVideo: true,
        src: !Array.isArray(config.image) ? config.image : "",
        preloadSrcs: config.imagesPreload,
        onVideoEnd: handleVideoEnd,
      });
    } else {
      // If not video => possibly stop-motion
      if (Array.isArray(config.image)) {
        setActiveBg({
          key: `image-seq-${page}-${Date.now()}`,
          isVideo: false,
          src: config.image[0],
          preloadSrcs: config.imagesPreload,
        });
        animateSequence(config.image, config.stopMotionDuration || 2000, () => {
          if (config.redirectTo) {
            router.push(config.redirectTo);
          }
        });
      } else if (config.redirectTo) {
        // Single static image + redirect
        setActiveBg({
          key: `image-redirect-${page}-${Date.now()}`,
          isVideo: false,
          src: config.image,
          preloadSrcs: config.imagesPreload,
        });
        setTimeout(() => {
          router.push(config.redirectTo as string);
        }, config.stopMotionDuration || 2500);
      } else {
        // Plain static
        setActiveBg({
          key: `image-${page}-${Date.now()}`,
          isVideo: false,
          src: config.image,
          preloadSrcs: config.imagesPreload,
        });
      }
    }
  }, [page, config]);

  useEffect(() => {
    if (prevBg && activeBg && prevBg.key === activeBg.key) {
      setPrevBg(null);
    }
  }, [prevBg, activeBg]);

  return (
    <AnimatePresence onExitComplete={() => setPrevBg(null)}>
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
