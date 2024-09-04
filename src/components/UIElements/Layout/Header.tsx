import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import unit from "../../../styles/unit";
import Text from "../Text";
import useRoute from "../../../hooks/useRoute";
import useNavigation from "../../../hooks/useNavigation";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const { name, params } = useRoute();
  const { name: customeName } = params;
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text size="xxlarge" color="white">
        {customeName || name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 22 * unit,
    alignSelf: "flex-start",
  },
});

export default Header;
