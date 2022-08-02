import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CustomLeftComponentToggle} from './components/CustomLeftComponentToggle';
import {CustomLeftRightComponentToggle} from './components/CustomLeftRightComponentToggle';
import {CustomRightComponentToggle} from './components/CustomRightComponentToggle';
import {DefaultToggle} from './components/DefaultToggle';
import {DisabledToggle} from './components/DisabledToggle';
import {LeftRightTitleToggle} from './components/LeftRightTitleToggle';
import {LeftTitleToggle} from './components/LeftTitleToggle';
import {ModifyDisabledToggle} from './components/ModifyDisabledToggle';
import {ModifyThumbButtonToggle} from './components/ModifyThumbButtonToggle';
import {ModifyTrackBarSizeToggle} from './components/ModifyTrackBarSizeToggle';
import {ModifyTrackBarStyleToggle} from './components/ModifyTrackBarStyleToggle';
import {RightTitleToggle} from './components/RightTitleToggle';
import {ThumbButtonComponentToggle} from './components/ThumbButtonComponentToggle';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <DefaultToggle />

          <LeftTitleToggle />

          <RightTitleToggle />

          <LeftRightTitleToggle />

          <CustomLeftComponentToggle />

          <CustomRightComponentToggle />

          <CustomLeftRightComponentToggle />

          <ThumbButtonComponentToggle />

          <DisabledToggle />

          <ModifyTrackBarSizeToggle />

          <ModifyTrackBarStyleToggle />

          <ModifyThumbButtonToggle />

          <ModifyDisabledToggle />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
