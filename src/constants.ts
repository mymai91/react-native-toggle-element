import { StyleSheet } from "react-native";
import {
  ReactNativeToggleElementProps,
  ThumbButton,
  ThumbChildrenProps,
  ToogleTrackBar,
  TrackBar,
} from "./types";

export const COLOR_DEFAULT = {
  trackActiveBg: "#aacfcf",
  trackInActiveBg: "#679b9b",
  textActive: "#ffffff",
  textInActive: "#888888",
  thumbActive: "#fde2e2",
  thumbInActive: "#ffb6b6",
  disable: "#666666",
  borderColor: "transparent",
};

export const SIZE_DEFAULT = {
  trackBarHeight: 50,
  trackBarRadius: 25,
  trackBarWidth: 150,
  thumbBtnHeight: 50,
  thumbBtnRadius: 25,
  thumbBtnWidth: 50,
  borderWidth: 0,
};

export const DefaultThumbChildrenProps: ThumbChildrenProps = {
  toggleValue: false,
  placement: "left",
  activeColor: COLOR_DEFAULT.textActive,
  inActiveColor: COLOR_DEFAULT.textInActive,
  title: null,
  children: null,
  disabled: false,
  disabledTitleStyle: null,
};

export const DefaultReactNativeToggleElementProps: ReactNativeToggleElementProps =
  {
    onPress: () => console.warn("Please attach a method for Toggle Button"),
    value: false,
    disabled: false,
    leftComponent: null,
    rightComponent: null,
    thumbActiveComponent: null,
    thumbInActiveComponent: null,
    trackBar: {
      borderWidth: SIZE_DEFAULT.borderWidth,
      width: SIZE_DEFAULT.trackBarWidth,
      height: SIZE_DEFAULT.trackBarHeight,
      radius: SIZE_DEFAULT.trackBarRadius,
      activeBackgroundColor: COLOR_DEFAULT.trackActiveBg,
      inActiveBackgroundColor: COLOR_DEFAULT.trackInActiveBg,
      borderActiveColor: COLOR_DEFAULT.borderColor,
      borderInActiveColor: COLOR_DEFAULT.borderColor,
    },
    thumbButton: {
      borderWidth: SIZE_DEFAULT.borderWidth,
      width: SIZE_DEFAULT.thumbBtnWidth,
      height: SIZE_DEFAULT.thumbBtnHeight,
      radius: SIZE_DEFAULT.thumbBtnRadius,
      activeBackgroundColor: COLOR_DEFAULT.thumbActive,
      inActiveBackgroundColor: COLOR_DEFAULT.thumbInActive,
      activeColor: COLOR_DEFAULT.textActive,
      inActiveColor: COLOR_DEFAULT.textInActive,
    },
    leftTitle: null,
    rightTitle: null,
    containerStyle: null,
    trackBarStyle: null,
    disabledStyle: {
      opacity: 0.5,
    },
    disabledTitleStyle: {
      color: COLOR_DEFAULT.disable,
    },
    thumbStyle: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    animationDuration: 350,
  };

export const ToggleStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbPosition: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbLeft: {
    left: 0,
  },
  thumbRight: {
    right: 0,
  },
  thumbAnimatedPosition: {
    position: "absolute",
  },
});

export const ToogleTrackBarStyles: Record<
  "trackBar",
  (trackBar: TrackBar) => ToogleTrackBar
> = {
  trackBar: (trackBar: TrackBar) => {
    const { width, height, radius, borderWidth } = trackBar;
    const borderW = borderWidth ?? 0;
    const trackBarW = width ?? SIZE_DEFAULT.trackBarWidth;
    const trackBarH = height ?? SIZE_DEFAULT.trackBarHeight;
    const borderRadius = radius ?? SIZE_DEFAULT.trackBarRadius;
    return {
      width: trackBarW,
      height: trackBarH,
      borderRadius,
      justifyContent: "center",
      borderWidth: borderW,
    };
  },
};

export const ToggleThumbButtonStyles = {
  thumbButton: (thumbButton: ThumbButton, trackBarBorderWidth?: number) => {
    const borderW = trackBarBorderWidth ?? 0;
    let { width, height, radius } = thumbButton;
    const thumbBtnW = width ?? SIZE_DEFAULT.thumbBtnWidth;
    const thumbBtnH = height ?? SIZE_DEFAULT.thumbBtnHeight;
    const thumbBtnRadius = radius ?? SIZE_DEFAULT.thumbBtnRadius;
    width = thumbBtnW - borderW * 2;
    height = thumbBtnH - borderW * 2;
    radius = thumbBtnRadius - borderW / 4;
    return {
      width,
      height,
      borderRadius: radius,
    };
  },
};
