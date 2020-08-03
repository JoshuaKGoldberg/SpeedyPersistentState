import React from "react";
import { Provider } from "react-redux";

import { configureBasicStore } from "../shared/configureBasicStore";
import { Selective } from "./Selective";

export const SelectiveRoot = () => {
  const store = configureBasicStore();

  return (
    <Provider store={store}>
      <Selective />
    </Provider>
  );
};
