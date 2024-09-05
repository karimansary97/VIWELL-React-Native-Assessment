import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import TabNavigation from "./TabNavigation";
import ProductDetails from "../screens/ProductDetails";

type MainNavigationProps = {};
const Stack = createNativeStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.tabs}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.tabs} component={TabNavigation} />
      <Stack.Screen name={routes.productDetails} component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
