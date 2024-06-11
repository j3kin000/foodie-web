import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

const initialState = {
  isLoading: false,
  user: null,
};

export default (
  state = initialState,
  action: AnyAction
): typeof initialState => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
      };

    case USER_ACTION_TYPES.SET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
