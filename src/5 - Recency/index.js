import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { LoadingText } from "../shared/views/basic/LoadingText";
import { configurePersistentStore } from "./configurePersistentStore";
import { Recency } from "./Recency";

export const RecencyRoot = () => {
  const { store, persistor } = configurePersistentStore();

  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingText>Loading...</LoadingText>}
        persistor={persistor}
      >
        <Recency />
      </PersistGate>
    </Provider>
  );
};
