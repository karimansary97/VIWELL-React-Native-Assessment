import React, { FC } from "react";
import MainNavigation from "./navigation/MainNavgation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

type AppProps = {};

const App: FC<AppProps> = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
