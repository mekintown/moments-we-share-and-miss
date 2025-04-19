"use client";

import { backgroundMapConfig } from "@/configs/bg-config";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedVideoProps {
  src: string;
  onEnd?: () => void;
  className?: string;
  preloadSrcs: (typeof backgroundMapConfig)[keyof typeof backgroundMapConfig]["imagesPreload"];
}

const AnimatedVideo = ({
  src,
  onEnd,
  preloadSrcs,
  ...props
}: AnimatedVideoProps) => {
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
        <video
          className={cn(props.className, "hidden")}
          onLoadedData={() => {
            setCurrentSrc(src);
            setAttachPreload(false);
          }}
        >
          <source src={src} />
        </video>
      )}

      <video
        playsInline
        autoPlay
        onEnded={onEnd}
        className={cn(props.className, "absolute inset-0")}
        {...props}
      >
        <source src={currentSrc} />
      </video>

      {preloadSrcs?.map((source: string) => (
        <video key={`preload-${source}`} preload="auto" className="hidden">
          <source src={source} />
        </video>
      ))}
    </>
  );
};

export default AnimatedVideo;
