/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "redux";
import { createAction } from "src/utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

type data = {
  user: any;
};
export const setUser = (data: data) => async (dispatch: Dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.SET_USER_START));
  try {
    dispatch(createAction(USER_ACTION_TYPES.SET_USER_SUCCESS, data));
  } catch (error) {
    dispatch(createAction(USER_ACTION_TYPES.SET_USER_FAILED, error));
  }
};
