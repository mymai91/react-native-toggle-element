import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import { Section } from "./Section";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export const CustomLeftRightComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with custom left & right components">
      <Toggle
        value={toggleValue}
        onPress={(newState) => setToggleValue(newState)}
        leftComponent={<Ionicons name="card-outline" size={24} />}
        rightComponent={<AntDesign name="questioncircleo" type="antdesign" />}
      />
    </Section>
  );
};
