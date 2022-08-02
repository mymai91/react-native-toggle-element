import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const LeftTitleToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with left title">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="On"
      />
    </Section>
  );
};
