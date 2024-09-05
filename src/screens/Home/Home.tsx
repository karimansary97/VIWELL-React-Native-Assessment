import React, { FC, useState } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import Layout from "../../components/UIElements/Layout";
import { useGetProductsQuery } from "../../api/api";
import LoadingScreen from "../../components/UIElements/LoadingScreen/LoadingScreen";
import ListFooterLoading from "../../components/UIElements/ListFooterLoading/ListFooterLoading";
import EmptyView from "../../components/UIElements/EmptyView";
import ErrorView from "../../components/UIElements/ErrorView";
import ProductItem from "../../components/productItem";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  const [skip, setSkip] = useState(0);
  const {
    data = [],
    isFetching,
    isLoading,
    isError,
  } = useGetProductsQuery({ skip });

  const onRefresh = () => {
    setSkip(0);
  };

  const onEndReached = () => {
    if (!isFetching) {
      setSkip((prev) => prev + 10);
    }
  };
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return <ErrorView />;
  }
  return (
    <Layout style={styles.container}>
      {!data?.length ? (
        <EmptyView />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={(item) => item?.id + ""}
          renderItem={({ item }) => (
            <ProductItem
              image={item?.thumbnail}
              title={item?.title}
              price={item?.price}
              id={item?.id}
            />
          )}
          onEndReached={onEndReached}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }
          ListFooterComponent={() => (
            <ListFooterLoading hasLoading={isFetching && !isLoading} />
          )}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 30,
  },
});

export default Home;
