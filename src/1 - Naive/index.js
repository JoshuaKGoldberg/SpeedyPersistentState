import React from "react";
import { Provider } from "react-redux";

import { configureBasicStore } from "../shared/configureBasicStore";
import { Naive } from "./Naive";

export const NaiveRoot = () => {
  const store = configureBasicStore();

  return (
    <Provider store={store}>
      <Naive />
    </Provider>
  );
};
