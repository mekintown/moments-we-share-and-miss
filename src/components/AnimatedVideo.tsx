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

  // If src changes, preload the new video hidden
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

      {/* Main video uses currentSrc so we only switch once new is preloaded */}
      <video
        muted
        playsInline
        autoPlay
        onEnded={onEnd}
        className={cn(props.className, "absolute inset-0")}
        {...props}
      >
        <source src={currentSrc} />
      </video>

      {/* Preload any additional sources */}
      {preloadSrcs?.map((source: string) => (
        <video key={`preload-${source}`} preload="auto" className="hidden">
          <source src={source} />
        </video>
      ))}
    </>
  );
};

export default AnimatedVideo;
