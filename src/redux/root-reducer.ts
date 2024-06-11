import { combineReducers } from "redux";
import globalReducer from "./global/global.reducer";
import userReducer from "./user/user.reducer";

export const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
});
