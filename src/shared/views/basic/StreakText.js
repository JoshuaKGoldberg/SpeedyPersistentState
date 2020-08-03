import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const StreakText = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#002060",
    borderColor: "white",
    borderRadius: "100%",
    borderWidth: 1,
    height: 75,
    justifyContent: "center",
    marginTop: -50,
    marginLeft: "65%",
    width: 75,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
