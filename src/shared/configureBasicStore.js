import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./state/reducers";

export const configureBasicStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
