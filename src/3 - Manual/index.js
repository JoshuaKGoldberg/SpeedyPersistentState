import React from "react";
import { Provider } from "react-redux";

import { configureBasicStore } from "../shared/configureBasicStore";
import { Manual } from "./Manual";

export const ManualRoot = () => {
  const store = configureBasicStore();

  return (
    <Provider store={store}>
      <Manual />
    </Provider>
  );
};
