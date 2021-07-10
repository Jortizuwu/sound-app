import { types } from "../types/types";

const initial = {
  next: 0,
  showBotton: false,
  duration: 0,
};

export const soundReducers = (state = initial, action) => {
  switch (action.type) {
    case types.next:
      return {
        ...state,
        next: action.payload,
      };
    case types.showBotton:
      return {
        ...state,
        showBotton: action.payload,
      };
    case types.duration:
      return {
        ...state,
        duration: action.payload,
      };
    default:
      return state;
  }
};
