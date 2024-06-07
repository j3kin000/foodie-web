import { createSelector } from "reselect";
import { RootState } from "../store";

const globalSelector = (state: RootState) => state.global;

export const selectIsOpen = createSelector(
  [globalSelector],
  (global) => global.isOpen
);
