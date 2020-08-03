import React from "react";
import { StyleSheet, View } from "react-native";

export const ProfileContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#002060",
    borderColor: "white",
    borderRadius: "100%",
    borderWidth: 1,
    height: 175,
    justifyContent: "center",
    marginLeft: "5%",
    marginTop: "2%",
    width: 175,
  },
});
