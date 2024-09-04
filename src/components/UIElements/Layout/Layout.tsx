import React, { FC, ReactNode } from "react";
import { KeyboardAvoidingView, StatusBar, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../../styles/colors";
import Header from "./Header";
import styles from "./Layout.style";

import { IS_IOS } from "../../../helpers/common";

const behavior = IS_IOS ? "padding" : "height";

type LayoutProps = {
  HeaderVisablity?: boolean;
  children?: ReactNode;
  style?: ViewStyle;
};

const Layout: FC<LayoutProps> = ({
  HeaderVisablity = false,
  style,
  children,
}) => {
  const { top } = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, { paddingTop: top }]}
    >
      <StatusBar
        backgroundColor={colors.defaultBackGround}
        barStyle={"dark-content"}
      />
      <View style={[styles.content, style]}>
        {HeaderVisablity && <Header />}
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Layout;
