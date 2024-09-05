import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../components/UIElements/BottomBar";
import routes from "./routes";
import Products from "../screens/Products";
import Whislist from "../screens/Whislist";

const tabBarRender = (props: any) => {
  return <BottomBar {...props} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.products}
      tabBar={tabBarRender}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={routes.products} component={Products} />
      <Tab.Screen name={routes.wishlist} component={Whislist} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
