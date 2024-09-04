import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import Layout from "../../components/UIElements/Layout";
import { useGetPostsQuery } from "../../api/api";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  const { data } = useGetPostsQuery();
  return (
    <Layout style={styles.container}>
      <Text>New Screen Home </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
