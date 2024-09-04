import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBar from "../components/UIElements/BottomBar";
import routes from "./routes";
import Home from "../screens/Home";

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
      <Tab.Screen name={routes.products} component={Home} />
      <Tab.Screen name={routes.wishlist} component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
