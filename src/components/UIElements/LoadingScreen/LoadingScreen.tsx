import React, { FC } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Text from "../Text";
import Layout from "../Layout";

type LoadingScreenProps = {};

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  return (
    <Layout style={styles.container}>
      <ActivityIndicator size={"large"} />
      <Text size="large">Laoding</Text>
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
