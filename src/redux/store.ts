/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Action,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { rootReduder } from "./root-reducer";
import { ThunkDispatch, thunk } from "redux-thunk";

export type RootState = ReturnType<typeof rootReduder>;

export type TypedDispatch = ThunkDispatch<RootState, any, Action>;

export const store = createStore(rootReduder, compose(applyMiddleware(thunk)));
