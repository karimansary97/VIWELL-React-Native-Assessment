import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import Layout from "../Layout";

type ErrorViewProps = {
  message?: string;
};

const ErrorView: FC<ErrorViewProps> = ({
  message = "Opps...,Error Happen",
}) => {
  return (
    <Layout style={styles.container}>
      <Text>{message}</Text>
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

export default ErrorView;
