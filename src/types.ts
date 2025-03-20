import React from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type ThumbChildrenPlacement = "left" | "right";

export interface ThumbChildrenProps {
  toggleValue: boolean;
  activeColor: string;
  inActiveColor: string;
  title: string | null;
  placement: ThumbChildrenPlacement;
  children: any;
  disabled: boolean;
  disabledTitleStyle: TextStyle | null;
}

export interface TrackBar {
  borderWidth?: number;
  width?: number;
  height?: number;
  radius?: number;
  activeBackgroundColor?: string;
  inActiveBackgroundColor?: string;
  borderActiveColor?: string;
  borderInActiveColor?: string;
}

export interface ThumbButton {
  borderWidth?: number;
  width?: number;
  height?: number;
  radius?: number;
  activeBackgroundColor?: string;
  inActiveBackgroundColor?: string;
  activeColor?: string;
  inActiveColor?: string;
}

export interface ReactNativeToggleElementProps {
  onPress: (val?: boolean) => void;
  value: boolean;
  disabled?: boolean;
  trackBar?: TrackBar;
  thumbButton?: ThumbButton;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  thumbActiveComponent?: any;
  thumbInActiveComponent?: any;
  containerStyle?: ViewStyle | null;
  trackBarStyle?: ViewStyle | null;
  disabledStyle?: ViewStyle;
  disabledTitleStyle?: TextStyle;
  thumbStyle?: ViewStyle | null;
  leftTitle?: string | null;
  rightTitle?: string | null;
  animationDuration?: number;
  activeTrackBarComponent?: React.ReactNode;
  inActiveTrackBarComponent?: React.ReactNode;
  managed: boolean;
}
export interface Styles {
  container: ViewStyle;
  trackBar: (trackBar: TrackBar) => ViewStyle | ImageStyle | TextStyle;
}

export interface ToogleTrackBar {
  width: number;
  height: number;
  borderRadius: number;
  justifyContent:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  borderWidth: number;
}

export interface TrackBarConfig {
  borderWidth: number;
  width: number;
  height: number;
  radius: number;
  activeBackgroundColor: string;
  inActiveBackgroundColor: string;
  borderActiveColor: string;
  borderInActiveColor: string;
}

export interface ThumbButtonConfig {
  borderWidth: number;
  width: number;
  height: number;
  radius: number;
  activeBackgroundColor: string;
  inActiveBackgroundColor: string;
  activeColor: string;
  inActiveColor: string;
}
