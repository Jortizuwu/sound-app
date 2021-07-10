import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Slider from "react-slick";

export const Reproductor = ({
  handlePreviousSound,
  handlePlay,
  handleNextSound,
  handlePause,
  uwu,
  next,
  duration,
}) => {
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    slidesToScroll: 1,
  };
  const { showBotton } = useSelector((state) => state.sound);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="transform -skew-y-3 h-4/5 w-11/12 sm:w-2/3 flex flex-col justify-between items-center">
        <div className="rellax h-4/5 w-full flex flex-col bg-song justify-center items-center">
          <Slider {...settings} className="h-full w-full flex flex-row">
            {uwu.map((v, idx) => (
              <div key={v.id} className="h-full w-full">
                <img
                  className={
                    idx === next
                      ? "hola cursor-pointer transform scale-150 reflejo relative w-full h-full transition duration-300"
                      : "hola cursor-pointer transform scale-75 opacity-10 reflejo relative w-full h-full  transition duration-300"
                  }
                  src={v.img}
                  alt=""
                />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-24 right-22 sm:bottom-24 sm:right-32 flex flex-row justify-between mx-auto w-9/12 sm:w-5/12 mb-4">
            <button 
              className="btn material-icons"
              onClick={handlePreviousSound}
            >
              skip_previous
            </button>
            {showBotton ? (
              <button className="btn material-icons" onClick={handlePause}>
                pause
              </button>
            ) : (
              <button className="btn material-icons" onClick={handlePlay}>
                play_arrow
              </button>
            )}
            <button className="btn material-icons" onClick={handleNextSound}>
              skip_next
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-10/12 bg-green-500 h-1">
            <div
              className="bg-red-500 h-1"
              style={{ width: duration * 2 }}
            ></div>
          </div>
          <p className="flex flex-row justify-end">{`${duration}`}</p>
        </div>
        <p className="text-xs sm:text-sm">{uwu[next].name}</p>
      </div>
    </div>
  );
};

Reproductor.propTypes = {
  handlePreviousSound: PropTypes.func.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleNextSound: PropTypes.func.isRequired,
  uwu: PropTypes.array.isRequired,
  next: PropTypes.number.isRequired,
};
