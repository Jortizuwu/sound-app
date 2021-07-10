import React, { useRef } from "react";
import { useEffect } from "react";
import { Howl } from "howler";
import { useDispatch, useSelector } from "react-redux";

import { uwu } from "../assets/uwu";
import { ListSound } from "./ListSound";
import { Reproductor } from "./Reproductor";
import { nextSound, soundDuration, showBottonA } from "../actions/sound";

export const SoundScreen = () => {
  const { next, duration, showBotton } = useSelector((state) => state.sound);
  const dispatch = useDispatch();
  const refShoBotton = useRef(showBotton);

  useEffect(() => {
    refShoBotton.current = false;
  }, []);

  let sond = new Howl({
    src: uwu.map((a) => a.sound),
    loop: false,
    volume: 0.7,
    autoplay: false,
  });

  const handleNextSound = () => {
    if (next === uwu.length - 1) {
      dispatch(nextSound(0));
    } else {
      dispatch(nextSound(next + 1));
      dispatch(soundDuration((sond.duration() / 60).toFixed(2)));
    }
  };

  const handlePreviousSound = () => {
    if (next === 0) {
      dispatch(nextSound(uwu.length - 1));
    } else {
      dispatch(nextSound(next - 1));
      dispatch(soundDuration((sond.duration() / 60).toFixed(2)));
    }
  };

  const handlePlay = () => {
    sond.play(uwu.indexOf(uwu.find((a) => a.id === next)));
    dispatch(showBottonA(showBotton));
    dispatch(soundDuration((sond.duration() / 60).toFixed(2)));
  };

  const handlePause = () => {
    sond.pause();
    dispatch(showBottonA(showBotton));
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 h-screen">
        <Reproductor
          handlePreviousSound={handlePreviousSound}
          handlePlay={handlePlay}
          handleNextSound={handleNextSound}
          handlePause={handlePause}
          uwu={uwu}
          next={next}
          duration={duration}
          img={uwu[next].img}
        />
      </div>
      <div className="w-full sm:w-1/2">
        <ListSound uwu={uwu} />
      </div>
    </div>
  );
};
