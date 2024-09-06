import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import unit from "../../../styles/unit";
import Text from "../Text";
import useRoute from "../../../hooks/useRoute";
import useNavigation from "../../../hooks/useNavigation";
import colors from "../../../styles/colors";
import AngleLeftIcon from "../../../../assets/AngleLeftIcon";

type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
  const { name, params } = useRoute();
  const { name: customeName } = params;
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} testID="back-button">
        <AngleLeftIcon
          width={24 * unit}
          height={24 * unit}
          color={colors.primary}
        />
      </Pressable>
      <Text semiBold size="xxlarge">
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
