import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { SIZE_DEFAULT } from "./constants";
import { ThumbButton, ThumbChildrenPlacement, TrackBar } from "./types";

export const useTitleTextColor = (
  toggleValue: boolean,
  activeColor: string,
  inActiveColor: string,
  title: string | null,
  placement: ThumbChildrenPlacement
) => {
  if (!title) return null;

  const onColor = toggleValue ? inActiveColor : activeColor;
  const offColor = toggleValue ? activeColor : inActiveColor;
  const textColor = placement === "left" ? onColor : offColor;

  return { textColor };
};

export const useToggleValue = (
  value: boolean,
  thumbButton: ThumbButton,
  trackBar: TrackBar,
  animationDuration: number,
  onPress: (val?: boolean) => void,
  managed: boolean
) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [toggleValue, setToggleValue] = useState(value);

  useEffect(() => {
    updateThumbButton(toggleValue);
  }, [toggleValue]);

  useEffect(() => {
    setToggleValue(value);
  }, [value]);

  const updateThumbButton = (toggleState) => {
    const thumbBtnWidth = thumbButton.width ?? SIZE_DEFAULT.thumbBtnWidth;
    const trackBarW = trackBar.width ?? SIZE_DEFAULT.trackBarWidth;
    const distance = trackBarW - thumbBtnWidth;
    const toValue = toggleState ? distance : 0;

    Animated.timing(fadeAnim, {
      toValue,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  };

  const handleToggle = () => {
    const val = !toggleValue;
    if(!managed) {
      setToggleValue(val);
    }
    onPress(val);
  };

  const handlePress = () => {
    handleToggle();
  };

  const handleLongPress = () => {
    handleToggle();
  };

  return {
    toggleValue,
    handlePress,
    handleLongPress,
    fadeAnim,
  };
};
