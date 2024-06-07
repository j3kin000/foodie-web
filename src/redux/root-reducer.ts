import { combineReducers } from "redux";
import globalReducer from "./global/global.reducer";

export const rootReduder = combineReducers({
  global: globalReducer,
});
