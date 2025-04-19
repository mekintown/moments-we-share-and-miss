"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";
import ReactHowler, { PropTypes as HowlerProps } from "react-howler";
import { Howl } from "howler";

export interface AudioPlayerHandle {
  howl: Howl | null;
}

/** Forward ref -> get access to .howl */
const AudioPlayer = forwardRef<AudioPlayerHandle, HowlerProps>((props, ref) => {
  const internal = useRef<ReactHowler>(null);

  useImperativeHandle(ref, () => ({
    get howl() {
      return internal.current?.howler ?? null;
    },
  }));

  return <ReactHowler ref={internal} {...props} />;
});

AudioPlayer.displayName = "AudioPlayer";
export default AudioPlayer;
