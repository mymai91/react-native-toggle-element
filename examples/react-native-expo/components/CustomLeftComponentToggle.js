import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import Toggle from "react-native-toggle-element";
import { Section } from "./Section";

export const CustomLeftComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with custom left component">
      <Toggle
        value={toggleValue}
        onPress={(newState) => setToggleValue(newState)}
        leftComponent={<Ionicons name="ios-card-outline" type="ionicon" />}
      />
    </Section>
  );
};
