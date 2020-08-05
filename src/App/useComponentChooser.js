import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const useComponentChooser = (componentNames) => {
  const [componentName, setComponentName] = useState();
  const [key, setKey] = useState(0);

  const chooser = (
    <View>
      <Text>Press a button to show its data loading strategy:</Text>
      {componentNames.map((name) => (
        <Button
          key={name}
          onPress={() => {
            setComponentName(name);
            setKey(key + 1);
          }}
          title={name}
        />
      ))}
    </View>
  );

  return [chooser, componentName, key];
};
