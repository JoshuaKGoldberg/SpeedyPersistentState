import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const TodayItemList = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((item) => (
        <Text key={item} style={styles.text}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#002060",
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    marginRight: 10,
    width: 210,
  },
  text: {
    color: "white",
    fontSize: 18,
    paddingVertical: 3,
  },
});
