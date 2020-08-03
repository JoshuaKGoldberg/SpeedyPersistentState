import React from "react";
import { Provider } from "react-redux";

import { configureBasicStore } from "../shared/configureBasicStore";
import { Async } from "./Async";

export const AsyncRoot = () => {
  const store = configureBasicStore();

  return (
    <Provider store={store}>
      <Async />
    </Provider>
  );
};
