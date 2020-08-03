import React from "react";
import { StyleSheet, Text } from "react-native";

export const LoadingText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontStyle: "italic",
    textAlign: "center",
  },
});
