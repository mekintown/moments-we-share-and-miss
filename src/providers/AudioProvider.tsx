"use client";

import dynamic from "next/dynamic";
import { Howl } from "howler";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AudioPlayerHandle } from "@/components/AudioPlayer";

const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), {
  ssr: false,
});

export const MUSIC_ENTRY_ROUTE = "/web-intro-1";

const VOLUME_BY_ROUTE: Record<string, number> = {
  "/web-intro-1": 1,
  "/web-sound-3": 0.4,
  "/web-sound-4": 0.3,
  "/web-sound-5": 0.15,
  "/web-sound-6": 0,
  "/web-sound-7": 1,
};

interface AudioCtx {
  fadeTo: (target: number, ms?: number) => void;
}
const Ctx = createContext<AudioCtx | null>(null);
export const useAudio = () => useContext(Ctx)!;

export default function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const playerRef = useRef<AudioPlayerHandle>(null);
  const howlRef = useRef<Howl | null>(null);

  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const unlock = () => setUserInteracted(true);
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, []);

  const [passedEntry, setPassedEntry] = useState(
    () => pathname === MUSIC_ENTRY_ROUTE
  );

  useEffect(() => {
    if (pathname === MUSIC_ENTRY_ROUTE) setPassedEntry(true);
  }, [pathname]);

  const playing = userInteracted && passedEntry;

  useEffect(() => {
    if (!playing || !howlRef.current) return;

    const h = howlRef.current;
    const target = VOLUME_BY_ROUTE[pathname] ?? 1;

    h.volume(0);
    h.fade(0, target, 5000);
  }, [playing]);

  const handleLoad = () => {
    howlRef.current = playerRef.current?.howl ?? null;
  };

  useEffect(() => {
    const h = howlRef.current;
    if (!h) return;
    h.fade(h.volume(), VOLUME_BY_ROUTE[pathname] ?? 1, 800);
  }, [pathname]);

  const fadeTo = (v: number, ms = 800) =>
    howlRef.current?.fade(howlRef.current.volume(), v, ms);

  return (
    <Ctx.Provider value={{ fadeTo }}>
      <AudioPlayer
        ref={playerRef}
        src="/audio/instrumental.mp3"
        playing={playing}
        loop
        preload
        volume={0}
        onLoad={handleLoad}
      />
      {children}
    </Ctx.Provider>
  );
}
