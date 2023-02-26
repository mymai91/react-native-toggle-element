import React from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { COLOR_DEFAULT, DefaultReactNativeToggleElementProps, DefaultThumbChildrenProps, ToggleStyles, ToggleThumbButtonStyles, ToogleTrackBarStyles, } from "./constants";
import { useTitleTextColor, useToggleValue } from "./hooks";
var ThumbChildren = function (props) {
    var toggleValue = props.toggleValue, activeColor = props.activeColor, inActiveColor = props.inActiveColor, title = props.title, placement = props.placement, children = props.children, disabled = props.disabled, disabledTitleStyle = props.disabledTitleStyle;
    if (children) {
        return <View>{children}</View>;
    }
    var titleTextColor = useTitleTextColor(toggleValue, activeColor, inActiveColor, title, placement);
    if (titleTextColor) {
        var textColor = titleTextColor.textColor;
        var textStyle = StyleSheet.flatten([
            {
                color: textColor,
            },
            disabled && disabledTitleStyle,
        ]);
        return <Text style={textStyle}>{title}</Text>;
    }
    return null;
};
ThumbChildren.defaultProps = DefaultThumbChildrenProps;
var ReactNativeToggleElement = function (props) {
    var value = props.value, leftComponent = props.leftComponent, rightComponent = props.rightComponent, thumbActiveComponent = props.thumbActiveComponent, thumbInActiveComponent = props.thumbInActiveComponent, trackBar = props.trackBar, thumbButton = props.thumbButton, containerStyle = props.containerStyle, trackBarStyle = props.trackBarStyle, disabledStyle = props.disabledStyle, disabledTitleStyle = props.disabledTitleStyle, disabled = props.disabled, thumbStyle = props.thumbStyle, leftTitle = props.leftTitle, rightTitle = props.rightTitle, animationDuration = props.animationDuration, onPress = props.onPress;
    var _a = useToggleValue(value, thumbButton, trackBar, animationDuration, onPress), toggleValue = _a.toggleValue, handlePress = _a.handlePress, handleLongPress = _a.handleLongPress, fadeAnim = _a.fadeAnim;
    var trackBarBackgroundColor = function () {
        var _a = props.trackBar, activeBackgroundColor = _a.activeBackgroundColor, inActiveBackgroundColor = _a.inActiveBackgroundColor, borderInActiveColor = _a.borderInActiveColor, borderActiveColor = _a.borderActiveColor;
        activeBackgroundColor =
            activeBackgroundColor !== null && activeBackgroundColor !== void 0 ? activeBackgroundColor : COLOR_DEFAULT.trackActiveBg;
        inActiveBackgroundColor =
            inActiveBackgroundColor !== null && inActiveBackgroundColor !== void 0 ? inActiveBackgroundColor : COLOR_DEFAULT.trackInActiveBg;
        borderActiveColor = borderActiveColor !== null && borderActiveColor !== void 0 ? borderActiveColor : COLOR_DEFAULT.borderColor;
        borderInActiveColor = borderInActiveColor !== null && borderInActiveColor !== void 0 ? borderInActiveColor : COLOR_DEFAULT.borderColor;
        var style = {
            backgroundColor: toggleValue
                ? activeBackgroundColor
                : inActiveBackgroundColor,
            borderColor: toggleValue ? borderActiveColor : borderInActiveColor,
        };
        return style;
    };
    var thumbButtonBackgroundColor = function () {
        var activeBg = "";
        var inActiveBg = "";
        var activeBackgroundColor = thumbButton.activeBackgroundColor, inActiveBackgroundColor = thumbButton.inActiveBackgroundColor;
        activeBg = activeBackgroundColor !== null && activeBackgroundColor !== void 0 ? activeBackgroundColor : COLOR_DEFAULT.thumbActive;
        inActiveBg = inActiveBackgroundColor !== null && inActiveBackgroundColor !== void 0 ? inActiveBackgroundColor : COLOR_DEFAULT.thumbInActive;
        return toggleValue ? activeBg : inActiveBg;
    };
    return (<View style={StyleSheet.flatten([ToggleStyles.container, containerStyle])}>
      <TouchableOpacity activeOpacity={1} testID="ToggleButton" onPress={function () { return handlePress(); }} onLongPress={function () { return handleLongPress(); }} disabled={disabled}>
        <View testID="TrackBar" style={StyleSheet.flatten([
            ToogleTrackBarStyles.trackBar(trackBar),
            trackBarBackgroundColor(),
            trackBarStyle,
            disabled && disabledStyle,
        ])}>
          <View testID="ThumbButtonLeft" style={StyleSheet.flatten([
            ToggleStyles.thumbPosition,
            ToggleStyles.thumbLeft,
            ToggleThumbButtonStyles.thumbButton(thumbButton, trackBar.borderWidth),
        ])}>
              <ThumbChildren toggleValue={toggleValue} activeColor={thumbButton.activeColor} inActiveColor={thumbButton.inActiveColor} disabled={disabled} disabledTitleStyle={disabledTitleStyle} title={leftTitle} placement="left">
                  {leftComponent}
              </ThumbChildren>
          </View>
          <Animated.View testID="ThumbButton" style={StyleSheet.flatten([
            {
                transform: [{ translateX: fadeAnim }],
                zIndex: -1,
                backgroundColor: thumbButtonBackgroundColor(),
            },
            ToggleStyles.thumbAnimatedPosition,
            ToggleThumbButtonStyles.thumbButton(thumbButton, trackBar.borderWidth),
            thumbStyle,
        ])}>
            {toggleValue ? thumbActiveComponent : thumbInActiveComponent}
          </Animated.View>
          <View testID="ThumbButtonRight" style={StyleSheet.flatten([
            ToggleStyles.thumbPosition,
            ToggleStyles.thumbRight,
            ToggleThumbButtonStyles.thumbButton(thumbButton, trackBar.borderWidth),
        ])}>
            <ThumbChildren toggleValue={toggleValue} activeColor={thumbButton.activeColor} inActiveColor={thumbButton.inActiveColor} disabled={disabled} disabledTitleStyle={disabledTitleStyle} title={rightTitle} placement="right">
              {rightComponent}
            </ThumbChildren>
          </View>
        </View>
      </TouchableOpacity>
    </View>);
};
ReactNativeToggleElement.defaultProps = DefaultReactNativeToggleElementProps;
export default ReactNativeToggleElement;
//# sourceMappingURL=toggle.js.map
