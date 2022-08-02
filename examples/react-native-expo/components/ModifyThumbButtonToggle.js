import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const ModifyThumbButtonToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Modify thumb button">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="Left"
        rightTitle="Right"
        thumbButton={{
          width: 60,
          height: 60,
          radius: 30,
        }}
      />
    </Section>
  );
};
