import React from "react";
import { StyleSheet, View } from "react-native";

export const TodayContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 175,
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "-5%",
    marginTop: 10,
  },
});
