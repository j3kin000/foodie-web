import { Dispatch } from "redux";
import { createAction } from "src/utils/reducer/reducer.utils";
import { GLOBAL_ACTION_TYPES } from "./global.types";

export const setOpen = (isOpen: boolean) => async (dispatch: Dispatch) => {
  dispatch(createAction(GLOBAL_ACTION_TYPES.SET_OPEN_START));
  try {
    dispatch(createAction(GLOBAL_ACTION_TYPES.SET_OPEN_SUCCESS, isOpen));
  } catch (error) {
    dispatch(createAction(GLOBAL_ACTION_TYPES.SET_OPEN_FAILED, error));
  }
};
