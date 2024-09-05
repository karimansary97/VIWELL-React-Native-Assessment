import React, { FC } from "react";
import {
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import Layout from "../../components/UIElements/Layout";
import { useGetProductQuery } from "../../redux/queries/products";
import useRoute from "../../hooks/useRoute";
import LoadingScreen from "../../components/UIElements/LoadingScreen";
import unit from "../../styles/unit";
import colors from "../../styles/colors";
import Text from "../../components/UIElements/Text";
import Rate from "../../components/UIElements/Rate";
import { CURRENCY } from "../../helpers/common";
import HeartIcon from "../../../assets/HearIcon";
import useIsWishlisted from "../../hooks/useIsWishlisted";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addProduct, removeProduct } from "../../redux/slices/wishlistSlice";

type ProductDetailsProps = {};

const ProductDetails: FC<ProductDetailsProps> = (props) => {
  const { params: productId } = useRoute();
  const { data, isFetching, refetch, isError } = useGetProductQuery(productId);
  const dispatch = useAppDispatch();

  const isWishlisted = useIsWishlisted(data?.id);

  const handleWishListPress = () => {
    if (!data) {
      return;
    }
    dispatch(isWishlisted ? removeProduct(data?.id) : addProduct(data));
  };

  if (isFetching) {
    return <LoadingScreen HeaderVisablity />;
  }
  return (
    <Layout style={styles.container} HeaderVisablity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refetch} />
        }
      >
        <Image
          style={styles.image}
          source={{ uri: data?.thumbnail }}
          resizeMode="contain"
          progressiveRenderingEnabled
          fadeDuration={600}
        />
        <Text bold size="large" style={styles.title}>
          {data?.title}
        </Text>
        <View style={styles.subtitle}>
          <View>
            <Text size="medium" semiBold>
              {data?.brand}
            </Text>
            <Text style={styles.category}>{data?.category}</Text>
          </View>
          <View style={styles.price}>
            <Text bold size="medium">
              {data?.price}
              {CURRENCY}
            </Text>
            <Rate rate={data?.rating} />
          </View>
        </View>
        <Text size="normal" style={styles.title}>
          {data?.description}
        </Text>
        <Pressable
          testID="wishlist-button"
          style={styles.button}
          onPress={handleWishListPress}
        >
          <Text testID="wishlist-button-text" semiBold color="white">
            {!isWishlisted ? "Add To WishList" : "Remove from WishList"}
          </Text>
          <HeartIcon
            width={20 * unit}
            height={20 * unit}
            color={colors.white}
            fill={isWishlisted ? colors.white : undefined}
          />
        </Pressable>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 380 * unit,
    height: 200 * unit,
    borderRadius: 8 * unit,
    borderWidth: 0.2 * unit,
    backgroundColor: colors.white,
    marginTop: 10 * unit,
  },
  title: {
    marginTop: 12 * unit,
  },
  subtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10 * unit,
  },
  price: {
    alignItems: "flex-end",
  },
  category: {
    textTransform: "capitalize",
  },
  footer: {
    flexDirection: "row",
    gap: 16 * unit,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16 * unit,
    gap: 16 * unit,
    borderRadius: 40,
    backgroundColor: colors.primary,
    marginTop: 20 * unit,
  },
});

export default ProductDetails;
