import { createSelector } from "reselect";
import { RootState } from "../store";

const userSelector = (state: RootState) => state.user;

export const selectUser = createSelector([userSelector], (user) => user.user);
export const selectIsLoading = createSelector(
  [userSelector],
  (user) => user.isLoading
);
