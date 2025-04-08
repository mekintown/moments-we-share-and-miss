"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedImageProps {
  src: string;
  className?: string;
  preloadSrcs: (typeof backgroundMapConfig)[keyof typeof backgroundMapConfig]["imagesPreload"];
}

const AnimatedVideo = ({ src, preloadSrcs, ...props }: AnimatedImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attachPreload, setAttachPreload] = useState(false);

  useEffect(() => {
    if (src !== currentSrc) {
      setAttachPreload(true);
    }
  }, [currentSrc, src]);

  return (
    <>
      {attachPreload && (
        <video
          className={cn(props.className, "-z-[100] hidden")}
          onLoadedData={() => {
            setCurrentSrc(src);
          }}
        >
          <source src={src} {...props} />
        </video>
      )}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSrc}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            setTimeout(() => {
              setAttachPreload(false);
            }, 1500);
          }}
        >
          <video
            muted
            playsInline
            autoPlay
            {...props}
            className="absolute w-full h-full inset-0"
          >
            <source src={currentSrc} />
          </video>
        </motion.div>
      </AnimatePresence>
      {preloadSrcs?.map((source: string) => (
        <video key={`preload-${source}`} {...props} className="hidden">
          <source src={source} />
        </video>
      ))}
    </>
  );
};

export default AnimatedVideo;
