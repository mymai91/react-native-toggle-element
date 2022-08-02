import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const DisabledToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Disabled toggle">
      <Toggle
        disabled
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="Left"
        rightTitle="Right"
      />
    </Section>
  );
};
