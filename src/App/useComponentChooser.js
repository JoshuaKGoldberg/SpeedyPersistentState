import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export const useComponentChooser = (componentNames) => {
  const [componentName, setComponentName] = useState();

  const chooser = (
    <View>
      <Text>Press a button to show its data loading strategy:</Text>
      {componentNames.map((name) => (
        <Button
          disabled={name === componentName}
          key={name}
          onPress={() => setComponentName(name)}
          title={name}
        />
      ))}
    </View>
  );

  return [chooser, componentName];
};
