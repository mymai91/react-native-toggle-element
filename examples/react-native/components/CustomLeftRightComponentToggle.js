import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';
import {Icon} from '@rneui/themed';

export const CustomLeftRightComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with custom left & right components">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        leftComponent={<Icon name="ios-card-outline" type="ionicon" />}
        rightComponent={<Icon name="questioncircleo" type="antdesign" />}
      />
    </Section>
  );
};
