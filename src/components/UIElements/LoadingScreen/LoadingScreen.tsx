import React, { FC } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Text from "../Text";
import Layout from "../Layout";
import { LayoutProps } from "../Layout/Layout";

type LoadingScreenProps = {} & LayoutProps;

const LoadingScreen: FC<LoadingScreenProps> = ({ ...props }) => {
  return (
    <Layout testId="loading-screen" {...props}>
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
        <Text size="large">Laoding</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
