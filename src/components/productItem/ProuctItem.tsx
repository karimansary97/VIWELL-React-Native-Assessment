import React, { FC } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

import Text from "../UIElements/Text";
import colors from "../../styles/colors";
import unit from "../../styles/unit";

type ProuctItemProps = {
  title: string;
  image: string;
  price: number;
  id: number;
};

const ProuctItem: FC<ProuctItemProps> = ({ title, image, price, id }) => {
  const handleOnPress = () => {};

  return (
    <Pressable style={styles.continer} onPress={handleOnPress}>
      <Image
        style={styles.itemImage}
        source={{ uri: image }}
        resizeMode="contain"
        progressiveRenderingEnabled
        fadeDuration={600}
      />
      <View style={styles.continerDetails}>
        <Text semiBold size="normal">
          {title}
        </Text>
        <View>
          <Text bold size="normal">
            {price} $
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    borderRadius: 8 * unit,
    backgroundColor: colors.white,
    marginTop: 12 * unit,
    flexDirection: "row",
    padding: 12,
  },
  continerDetails: {
    flex: 1,
    marginStart: 10 * unit,
    justifyContent: "space-between",
  },
  itemImage: {
    width: 140 * unit,
    height: 200 * unit,
    borderRadius: 8 * unit,
    borderWidth: 0.2 * unit,
    backgroundColor: colors.lightSmoke,
  },
});

export default ProuctItem;
