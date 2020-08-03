import React from "react";

import { StyleSheet, View } from "react-native";

export const HomeView = ({ children }) => {
  return <View style={styles.homeView}>{children}</View>;
};

const styles = StyleSheet.create({
  homeView: {
    alignContent: "center",
    backgroundColor: "#002060",
    height: 420,
    justifyContent: "center",
    overflow: "hidden",
    width: 280,
  },
});
