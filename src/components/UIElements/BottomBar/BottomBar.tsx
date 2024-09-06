import React, { FC } from "react";
import { View, Pressable } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import styles from "./BottomBar.style";
import { CommonActions } from "@react-navigation/native";
import Text from "../Text";
import colors from "../../../styles/colors";

const BottomBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.dispatch({
              ...CommonActions.navigate(route),
              target: state.key,
            });
          }
        };

        return (
          <View style={{ flex: 1, flexDirection: "row" }} key={label}>
            <Pressable
              key={route.key}
              style={styles.item}
              onPress={onPress}
              testID={`${index}-tab`}
            >
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? colors.primary : colors.smoke,
                  size: 0,
                })}
              <Text
                semiBold
                size="medium"
                style={[
                  styles.text,
                  isFocused ? styles.focused : styles.unFocused,
                ]}
              >
                {label}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default BottomBar;
