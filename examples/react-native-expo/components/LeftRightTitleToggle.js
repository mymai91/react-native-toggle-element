import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const LeftRightTitleToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with left title and right title">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="Left"
        rightTitle="Right"
      />
    </Section>
  );
};
