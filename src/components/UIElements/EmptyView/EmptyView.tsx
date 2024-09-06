import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../Text";

type EmptyViewProps = {
  message?: string;
};

const EmptyView: FC<EmptyViewProps> = ({
  message = "No Data Found,Try Agian later...",
}) => {
  return (
    <View style={styles.container} testID="Empty-View">
      <Text bold size="large">
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EmptyView;
