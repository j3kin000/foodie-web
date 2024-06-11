import { createSelector } from "reselect";
import { RootState } from "../store";

const globalSelector = (state: RootState) => state.global;

export const selectIsOpen = createSelector(
  [globalSelector],
  (global) => global.isOpen
);

export const selectAccessToken = createSelector(
  [globalSelector],
  (global) => global.accessToken
);
