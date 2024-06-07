import { AnyAction } from "redux";
import { GLOBAL_ACTION_TYPES } from "./global.types";

const initialState = {
  isOpen: false,
};

export default (
  state = initialState,
  action: AnyAction
): typeof initialState => {
  switch (action.type) {
    case GLOBAL_ACTION_TYPES.SET_OPEN_SUCCESS:
      return {
        ...state,
        isOpen: action.payload,
      };

    case GLOBAL_ACTION_TYPES.SET_OPEN_FAILED:
      return state;

    default:
      return state;
  }
};
