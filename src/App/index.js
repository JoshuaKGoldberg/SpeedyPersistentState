import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import { NaiveRoot } from "../1 - Naive";
import { SelectiveRoot } from "../2 - Selective";
import { AsyncRoot } from "../3 - Async";
import { PersistentRoot } from "../4 - Persistent";
import { useComponentChooser } from "./useComponentChooser";
import { HomeView } from "./HomeView";

const components = {
  "1 - Naive": NaiveRoot,
  "2 - Selective": SelectiveRoot,
  "3 - Async": AsyncRoot,
  "4 - Persistent": PersistentRoot,
};

const componentNames = Object.keys(components);

export default function App() {
  const [chooser, componentName] = useComponentChooser(componentNames);
  const Component = components[componentName];

  return (
    <View style={styles.container}>
      {chooser}
      <HomeView>{Component && <Component key={Date.now()} />}</HomeView>
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
