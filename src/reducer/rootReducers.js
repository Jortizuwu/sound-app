import { combineReducers } from "redux";
import { soundReducers } from "./soundReducer";

export const rootReducer = combineReducers({
  sound: soundReducers,
});
