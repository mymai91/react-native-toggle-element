/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const ModifyTrackBarStyleToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Modify trackbar style">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        trackBarStyle={{
          borderColor: 'green',
        }}
        trackBar={{
          borderWidth: 2,
        }}
      />
    </Section>
  );
};
