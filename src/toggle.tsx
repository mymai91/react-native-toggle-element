import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  defaultThumbButton,
  DefaultThumbChildrenProps,
  defaultTrackBar,
  ToggleStyles,
  ToggleThumbButtonStyles,
  ToogleTrackBarStyles,
} from "./constants";
import { useTitleTextColor, useToggleValue } from "./hooks";
import { ReactNativeToggleElementProps, ThumbChildrenProps } from "./types";

const ThumbChildren = (props: ThumbChildrenProps) => {
  const {
    toggleValue,
    activeColor,
    inActiveColor,
    title,
    placement,
    children,
    disabled,
    disabledTitleStyle,
  } = { ...DefaultThumbChildrenProps, ...props };

  if (children) {
    return <View>{children}</View>;
  }

  const titleTextColor = useTitleTextColor(
    toggleValue,
    activeColor,
    inActiveColor,
    title,
    placement
  );

  if (titleTextColor) {
    const { textColor } = titleTextColor;

    const textStyle = StyleSheet.flatten([
      {
        color: textColor,
      },
      disabled && disabledTitleStyle,
    ]);

    return <Text style={textStyle}>{title}</Text>;
  }

  return null;
};

const ReactNativeToggleElement = (props: ReactNativeToggleElementProps) => {
  const {
    onPress,
    value,
    disabled,
    leftComponent,
    rightComponent,
    thumbActiveComponent,
    thumbInActiveComponent,
    trackBar: customTrackBar,
    thumbButton: customThumbButton,
    containerStyle,
    trackBarStyle,
    disabledStyle,
    disabledTitleStyle,
    thumbStyle,
    leftTitle = "",
    rightTitle = "",
    animationDuration = 250,
    activeTrackBarComponent,
    inActiveTrackBarComponent,
    managed = false
  } = { ...DefaultThumbChildrenProps, ...props };

  const finalTrackBar = { ...defaultTrackBar, ...customTrackBar };
  const finalThumbButton = { ...defaultThumbButton, ...customThumbButton };

  const { toggleValue, handlePress, handleLongPress, fadeAnim } =
    useToggleValue(
      value,
      finalThumbButton,
      finalTrackBar,
      animationDuration,
      onPress,
      managed,
    );

  const trackBarBackgroundColor = () => {
    let {
      activeBackgroundColor,
      inActiveBackgroundColor,
      borderInActiveColor,
      borderActiveColor,
    } = finalTrackBar;

    const style = {
      backgroundColor: toggleValue
        ? activeBackgroundColor
        : inActiveBackgroundColor,
      borderColor: toggleValue ? borderActiveColor : borderInActiveColor,
    };

    return style;
  };

  const { activeBackgroundColor, inActiveBackgroundColor } = finalThumbButton;

  return (
    <View style={StyleSheet.flatten([ToggleStyles.container, containerStyle])}>
      <TouchableOpacity
        activeOpacity={1}
        testID="ToggleButton"
        onPress={() => handlePress()}
        onLongPress={() => handleLongPress()}
        disabled={disabled}
      >
        <View
          testID="TrackBar"
          style={StyleSheet.flatten([
            ToogleTrackBarStyles.trackBar(finalTrackBar),
            trackBarBackgroundColor(),
            trackBarStyle,
            disabled && disabledStyle,
          ])}
        >
          {toggleValue && activeTrackBarComponent}
          {!toggleValue && inActiveTrackBarComponent}
          <View
            testID="ThumbButtonLeft"
            style={StyleSheet.flatten([
              ToggleStyles.thumbPosition,
              ToggleStyles.thumbLeft,
              ToggleThumbButtonStyles.thumbButton(
                finalThumbButton,
                finalTrackBar.borderWidth
              ),
            ])}
          >
            <ThumbChildren
              toggleValue={toggleValue}
              activeColor={activeBackgroundColor}
              inActiveColor={inActiveBackgroundColor}
              disabled={disabled}
              disabledTitleStyle={disabledTitleStyle}
              title={leftTitle}
              placement="left"
            >
              {leftComponent}
            </ThumbChildren>
          </View>
          <Animated.View
            testID="ThumbButton"
            style={StyleSheet.flatten([
              {
                transform: [{ translateX: fadeAnim }],
                zIndex: -1,
                backgroundColor: toggleValue
                  ? activeBackgroundColor
                  : inActiveBackgroundColor,
              },
              ToggleStyles.thumbAnimatedPosition,
              ToggleThumbButtonStyles.thumbButton(
                finalThumbButton,
                finalTrackBar.borderWidth
              ),
              thumbStyle,
            ])}
          >
            {toggleValue ? thumbActiveComponent : thumbInActiveComponent}
          </Animated.View>
          <View
            testID="ThumbButtonRight"
            style={StyleSheet.flatten([
              ToggleStyles.thumbPosition,
              ToggleStyles.thumbRight,
              ToggleThumbButtonStyles.thumbButton(
                finalThumbButton,
                finalTrackBar.borderWidth
              ),
            ])}
          >
            <ThumbChildren
              toggleValue={toggleValue}
              activeColor={finalThumbButton.activeColor}
              inActiveColor={finalThumbButton.inActiveColor}
              disabled={disabled}
              disabledTitleStyle={disabledTitleStyle}
              title={rightTitle}
              placement="right"
            >
              {rightComponent}
            </ThumbChildren>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ReactNativeToggleElement;
