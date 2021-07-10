import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSound } from "../actions/sound";

export const ListSound = ({ uwu }) => {
  const { next } = useSelector((state) => state.sound);
  const dispatch = useDispatch();

  const handleSelectSoundo = (val) => {
    dispatch(nextSound(uwu.indexOf(uwu.find((va) => va.id === val))));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h2 className="mb-10 text-xl">PLay list</h2>
      <ul className="shadow overflow-y-scroll h-4/5 w-11/12 sm:w-2/3 flex flex-col items-center space-y-1 transform -skew-x-3 ">
        {uwu.map((a) => (
          <li
            onClick={() => handleSelectSoundo(a.id)}
            key={a.id}
            className={
              a.id === uwu[next].id
                ? "uwu card-list card-active"
                : "uwu card-list"
            }
          >
            <figure className="h-full w-1/3">
              <img
                className="object-cover h-full w-full rounded-lg"
                src={a.img}
                alt=""
              />
            </figure>
            <div className="w-2/3 flex flex-col">
              <h5 className="text-xs sm:text-sm">{a.name}</h5>
              <p className="text-xs text-left">{a.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
