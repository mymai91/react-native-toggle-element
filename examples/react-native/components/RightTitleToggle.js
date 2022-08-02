import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const RightTitleToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with right title">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        rightTitle="Off"
      />
    </Section>
  );
};
