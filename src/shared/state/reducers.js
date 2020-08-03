import { HYDRATED_DATA } from "./actions";

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case HYDRATED_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
