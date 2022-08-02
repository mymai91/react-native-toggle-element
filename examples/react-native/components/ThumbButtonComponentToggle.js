import React, {useState} from 'react';
import Toggle from 'react-native-toggle-element';
import {Section} from './Section';
import {Icon} from '@rneui/themed';

export const ThumbButtonComponentToggle = () => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <Section title="Toggle with thumb button components">
      <Toggle
        value={toggleValue}
        onPress={newState => setToggleValue(newState)}
        thumbActiveComponent={<Icon name="sun" type="fontisto" color="gray" />}
        thumbInActiveComponent={
          <Icon name="night-clear" type="fontisto" color="gray" />
        }
        trackBar={{
          activeBackgroundColor: '#9ee3fb',
          inActiveBackgroundColor: '#3c4145',
          borderActiveColor: '#86c3d7',
          borderInActiveColor: '#1c1c1c',
          borderWidth: 5,
          width: 100,
        }}
      />
    </Section>
  );
};
