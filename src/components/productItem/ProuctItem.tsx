import React, { FC } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "../UIElements/Text";
import colors from "../../styles/colors";
import unit from "../../styles/unit";
import useNavigation from "../../hooks/useNavigation";
import routes from "../../navigation/routes";
import { CURRENCY } from "../../helpers/common";
import HeartIcon from "../../../assets/HearIcon";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useIsWishlisted from "../../hooks/useIsWishlisted";
import { addProduct, removeProduct } from "../../redux/slices/wishlistSlice";
import { product } from "../../types/ProductsType.type";

type ProuctItemProps = {
  item: product;
  index: number;
};

const ProuctItem: FC<ProuctItemProps> = ({ item, index }) => {
  const { navigate } = useNavigation();

  const dispatch = useAppDispatch();
  const isWishlisted = useIsWishlisted(item?.id);

  const handleWishlistPress = () => {
    dispatch(isWishlisted ? removeProduct(item?.id) : addProduct(item));
  };

  const handleOnPress = () => {
    navigate(routes.productDetails, item?.id);
  };
  return (
    <Pressable
      style={styles.continer}
      onPress={handleOnPress}
      testID={`product-${index}`}
    >
      <Image
        style={styles.itemImage}
        source={{ uri: item?.thumbnail }}
        resizeMode="contain"
        progressiveRenderingEnabled
        fadeDuration={600}
      />
      <View style={styles.continerDetails}>
        <Text semiBold size="normal">
          {item?.title}
        </Text>
        <View style={styles.price}>
          <Text bold size="normal">
            {item?.price} {CURRENCY}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleWishlistPress}
            testID={`Fav-button-${index}`}
          >
            <HeartIcon
              width={20 * unit}
              height={20 * unit}
              color={colors.white}
              fill={isWishlisted ? colors.white : undefined}
            />
          </TouchableOpacity>
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
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 40 * unit,
    height: 40 * unit,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20 * unit,
    backgroundColor: colors.primary,
  },
});

export default ProuctItem;
