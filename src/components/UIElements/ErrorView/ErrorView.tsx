import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import Layout from "../Layout";
import { LayoutProps } from "../Layout/Layout";

type ErrorViewProps = {
  message?: string;
} & LayoutProps;

const ErrorView: FC<ErrorViewProps> = ({
  message = "Opps...,Error Happen",
  ...props
}) => {
  return (
    <Layout style={styles.container} testId="error-view" {...props}>
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
