"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { cn } from "@/lib/utils";
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
  }, [src, currentSrc]);

  return (
    <>
      {attachPreload && (
        <Image
          src={src}
          alt={`attached-preload-${alt}`}
          priority
          onLoad={() => {
            setCurrentSrc(src);
            setAttachPreload(false);
          }}
          {...props}
          className={cn(props.className, "hidden")}
        />
      )}

      {/* Main image shows "currentSrc" so no flash */}
      <Image src={currentSrc} alt={alt} {...props} />

      {/* Preload any additional images */}
      {preloadSrcs?.map((source: string | StaticImport) => (
        <Image
          key={`preload-${source}`}
          src={source}
          alt={`preload-${alt}`}
          loading="eager"
          priority
          {...props}
          className="hidden"
        />
      ))}
    </>
  );
};

export default AnimatedImage;
