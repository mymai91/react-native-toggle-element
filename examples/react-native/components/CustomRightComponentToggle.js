import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';
import {Icon} from '@rneui/themed';

export const CustomRightComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with custom right component">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        rightComponent={<Icon name="questioncircleo" type="antdesign" />}
      />
    </Section>
  );
};
