import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import { Section } from "./Section";

export const CustomRightComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with custom right component">
      <Toggle
        value={toggleValue}
        onPress={(newState) => setToggleValue(newState)}
        rightComponent={<AntDesign name="questioncircleo" type="antdesign" />}
      />
    </Section>
  );
};
