"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedImageProps {
  src: string;
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
        <video autoPlay>
          <source
            src={src}
            onLoad={() => {
              setCurrentSrc(src);
            }}
            {...props}
          />
          Your browser does not support the video tag.
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
          <video autoPlay>
            <source src={currentSrc} {...props} />
          </video>
        </motion.div>
      </AnimatePresence>
      {preloadSrcs?.map((source: string) => (
        <video
          autoPlay
          key={`preload-${source}`}
          src={source}
          {...props}
          className="hidden"
        />
      ))}
    </>
  );
};

export default AnimatedVideo;
