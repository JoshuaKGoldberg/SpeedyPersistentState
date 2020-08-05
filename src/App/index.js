import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { NaiveRoot } from "../1 - Naive";
import { SelectiveRoot } from "../2 - Selective";
import { ManualRoot } from "../3 - Manual";
import { PersistentRoot } from "../4 - Persistent";
import { RecencyRoot } from "../5 - Recency";
import { HomeView } from "./HomeView";
import { useComponentChooser } from "./useComponentChooser";

const components = {
  "1 - Naive": NaiveRoot,
  "2 - Selective": SelectiveRoot,
  "3 - Manual": ManualRoot,
  "4 - Persistent": PersistentRoot,
  "5 - Recency": RecencyRoot,
};

const componentNames = Object.keys(components);

export default function App() {
  const [chooser, componentName, key] = useComponentChooser(componentNames);
  const Component = components[componentName];

  return (
    <View style={styles.container}>
      {chooser}
      <HomeView>{Component && <Component key={key} />}</HomeView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
