import { types } from "../types/types";

export const nextSound = (actual = 0) => ({
  type: types.next,
  payload: actual,
});

export const soundDuration = (duration = 0) => ({
  type: types.duration,
  payload: duration,
});

export const showBottonA = (val) => ({
  type: types.showBotton,
  payload: !val
});
