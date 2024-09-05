import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../../styles/colors";
import { AirbnbRating } from "react-native-ratings";

type RateProps = {
  rate?: number;
};

const Rate: FC<RateProps> = ({ rate }) => {
  return (
    <AirbnbRating
      count={5}
      isDisabled
      defaultRating={rate}
      size={15}
      starContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    marginTop: -25,
  },
});

export default Rate;
