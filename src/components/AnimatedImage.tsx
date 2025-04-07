"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface AnimatedImageProps extends ImageProps {
  src: string;
  preloadSrcs: (typeof backgroundMapConfig)[keyof typeof backgroundMapConfig]["imagesPreload"];
}

const AnimatedImage = ({
  src,
  alt,
  preloadSrcs,
  ...props
}: AnimatedImageProps) => {
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
        <Image
          src={src}
          alt={`attached-preload-${alt}`}
          priority={true}
          onLoad={() => {
            setCurrentSrc(src);
          }}
          {...props}
          className={cn(props.className, "-z-[100]")}
        />
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
          <Image src={currentSrc} alt={alt} {...props} />
        </motion.div>
      </AnimatePresence>
      {preloadSrcs?.map((source: string | StaticImport) => (
        <Image
          key={`preload-${source}`}
          src={source}
          alt={`preload-${alt}`}
          loading="eager"
          priority={true}
          {...props}
          className="hidden"
        />
      ))}
    </>
  );
};

export default AnimatedImage;
