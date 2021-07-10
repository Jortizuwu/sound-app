import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { SoundScreen } from "./components/SoundScreen";

export const App = () => {
  return (
    <Provider store={store}>
      <SoundScreen />
    </Provider>
  );
};
