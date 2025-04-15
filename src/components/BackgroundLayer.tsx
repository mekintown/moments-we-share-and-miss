"use client";

import { motion } from "framer-motion";
import AnimatedVideo from "./AnimatedVideo";
import AnimatedImage from "./AnimatedImage";

interface BackgroundLayerProps {
  isVideo: boolean;
  src: string;
  preloadSrcs?: string[];
  onVideoEnd?: () => void;
}

const BackgroundLayer = ({
  isVideo,
  src,
  preloadSrcs,
  onVideoEnd,
}: BackgroundLayerProps) => {
  return (
    <motion.div
      className="absolute inset-0 -z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {isVideo ? (
        <AnimatedVideo
          src={src}
          preloadSrcs={preloadSrcs ?? []}
          className="relative -z-50 object-cover w-full h-full"
          onEnd={onVideoEnd}
        />
      ) : (
        <AnimatedImage
          src={src}
          preloadSrcs={preloadSrcs ?? []}
          alt="background-image"
          loading="eager"
          fill
          className="relative -z-50 object-cover"
        />
      )}
    </motion.div>
  );
};

export default BackgroundLayer;
