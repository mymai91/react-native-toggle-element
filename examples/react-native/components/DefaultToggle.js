import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const DefaultToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with default value">
      <Toggle value={toggleValue} onPress={val => setToggleValue(val)} />
    </Section>
  );
};
