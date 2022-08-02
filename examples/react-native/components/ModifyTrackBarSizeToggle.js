import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const ModifyTrackBarSizeToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Modify trackbar size">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="Left"
        rightTitle="Right"
        trackBar={{
          width: 200,
          height: 50,
          radius: 25,
        }}
      />
    </Section>
  );
};
