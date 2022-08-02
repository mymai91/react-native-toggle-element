/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';

export const ModifyDisabledToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Modify disabled toggle">
      <Toggle
        disabled
        disabledTitleStyle={{color: 'red'}}
        disabledStyle={{backgroundColor: 'gray', opacity: 0.3}}
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftTitle="Left"
        rightTitle="Right"
      />
    </Section>
  );
};
