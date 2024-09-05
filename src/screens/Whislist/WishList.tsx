import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Layout from "../../components/UIElements/Layout";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectWishlist } from "../../redux/slices/wishlistSlice";
import ProductItem from "../../components/productItem";
import EmptyView from "../../components/UIElements/EmptyView";

type WishListProps = {};

const WishList: FC<WishListProps> = ({}) => {
  const wishlist = useAppSelector(selectWishlist);

  return (
    <Layout style={styles.container}>
      {!wishlist.length ? (
        <EmptyView message="No Data Found, Please try to add some.. " />
      ) : (
        <FlatList
          data={wishlist}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductItem item={item} />}
          style={styles.container}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WishList;
