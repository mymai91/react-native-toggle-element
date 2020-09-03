import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

// PropsType
// https://reactjs.org/docs/typechecking-with-proptypes.html

const COLOR_DEFAULT = {
  trackActiveBg: '#aacfcf',
  trackInActiveBg: '#679b9b',
  textActive: '#ffffff',
  textInActive: '#888888',
  thumbActive: '#fde2e2',
  thumbInActive: '#ffb6b6',
  disable: '#666666',
  borderColor: 'transparent',
};

const SIZE_DEFAULT = {
  trackBarHeight: 50,
  trackBarRadius: 25,
  trackBarWidth: 150,
  thumbBtnHeight: 50,
  thumbBtnRadius: 25,
  thumbBtnWidth: 50,
  borderWidth: 0,
};

const ThumbChildren = (props) => {
  const {
    toggleValue,
    activeColor,
    inActiveColor,
    title,
    placement,
    children,
    disabled,
    disabledTitleStyle,
  } = props;

  if (children) {
    return children;
  }

  if (title) {
    const onColor = toggleValue ? activeColor : inActiveColor;
    const offColor = toggleValue ? inActiveColor : activeColor;
    const textColor = placement === 'left' ? onColor : offColor;
    return (
      <Text
        style={StyleSheet.flatten([
          {
            color: textColor,
          },
          disabled && disabledTitleStyle,
        ])}>
        {title}
      </Text>
    );
  }

  return null;
};

ThumbChildren.propTypes = {
  toggleValue: PropTypes.bool.isRequired,
  activeColor: PropTypes.string,
  inActiveColor: PropTypes.string,
  title: PropTypes.string,
  placement: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  disabledTitleStyle: Text.propTypes.style,
};

ThumbChildren.defaultProps = {
  activeColor: COLOR_DEFAULT.textActive,
  inActiveColor: COLOR_DEFAULT.textInActive,
  title: null,
  children: null,
  disabled: false,
  disabledTitleStyle: null,
};

const ReactNativeToggleElement = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const {
    value,
    leftComponent,
    rightComponent,
    thumbActiveComponent,
    thumbInActiveComponent,
    trackBar,
    thumbButton,
    containerStyle,
    trackBarStyle,
    disabledStyle,
    disabledTitleStyle,
    disabled,
    thumbStyle,
    leftTitle,
    rightTitle,
    animationDuration
  } = props;

  const [toggleValue, setToggleValue] = useState(value);

  useEffect(() => {
    updateThumbButton(toggleValue)
  }, [toggleValue])

  useEffect(() => {
    setToggleValue(value);
  }, [value])

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
    const { onPress } = props;
    const val = !toggleValue;
    setToggleValue(val);
    onPress(val);
  };

  const handlePress = () => {
    handleToggle();
  };

  const handleLongPress = () => {
    handleToggle();
  };

  const trackBarBackgroundColor = () => {
    let {
      activeBackgroundColor,
      inActiveBackgroundColor,
      borderInActiveColor,
      borderActiveColor,
    } = props.trackBar;

    activeBackgroundColor =
      activeBackgroundColor ?? COLOR_DEFAULT.trackActiveBg;
    inActiveBackgroundColor =
      inActiveBackgroundColor ?? COLOR_DEFAULT.trackInActiveBg;

    borderActiveColor = borderActiveColor ?? COLOR_DEFAULT.borderColor;
    borderInActiveColor = borderInActiveColor ?? COLOR_DEFAULT.borderColor;

    const style = {
      backgroundColor: toggleValue
        ? activeBackgroundColor
        : inActiveBackgroundColor,
      borderColor: toggleValue ? borderActiveColor : borderInActiveColor,
    };

    return style;
  };

  const thumbButtonBackgroundColor = () => {
    let activeBg = '';
    let inActiveBg = '';

    const { activeBackgroundColor, inActiveBackgroundColor } = thumbButton;

    activeBg = activeBackgroundColor ?? COLOR_DEFAULT.thumbActive;
    inActiveBg = inActiveBackgroundColor ?? COLOR_DEFAULT.thumbInActive;

    return toggleValue ? activeBg : inActiveBg;
  };

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <TouchableOpacity
        activeOpacity={1}
        testID="ToggleButton"
        onPress={() => handlePress()}
        onLongPress={() => handleLongPress()}
        disabled={disabled}>
        <View
          testID="TrackBar"
          style={StyleSheet.flatten([
            styles.trackBar(trackBar),
            trackBarBackgroundColor(),
            trackBarStyle,
            disabled && disabledStyle,
          ])}>
          <View
            testID="ThumbButtonLeft"
            style={StyleSheet.flatten([
              styles.thumbPosition,
              styles.thumbLeft,
              styles.thumbButton(thumbButton, trackBar.borderWidth),
            ])}>
            <ThumbChildren
              toggleValue={toggleValue}
              activeColor={thumbButton.activeColor}
              inActiveColor={thumbButton.inActiveColor}
              disabled={disabled}
              disabledTitleStyle={disabledTitleStyle}
              title={leftTitle}
              placement="left">
              {leftComponent}
            </ThumbChildren>
          </View>
          <Animated.View
            testID="ThumbButton"
            style={StyleSheet.flatten([
              {
                transform: [{ translateX: fadeAnim }],
                zIndex: -1,
                backgroundColor: thumbButtonBackgroundColor(),
              },
              styles.thumbAnimatedPosition,
              styles.thumbButton(thumbButton, trackBar.borderWidth),
              thumbStyle,
            ])}>
            {toggleValue ? thumbActiveComponent : thumbInActiveComponent}
          </Animated.View>
          <View
            testID="ThumbButtonRight"
            style={StyleSheet.flatten([
              styles.thumbPosition,
              styles.thumbRight,
              styles.thumbButton(thumbButton, trackBar.borderWidth),
            ])}>
            <ThumbChildren
              toggleValue={toggleValue}
              activeColor={thumbButton.activeColor}
              inActiveColor={thumbButton.inActiveColor}
              disabled={disabled}
              disabledTitleStyle={disabledTitleStyle}
              title={rightTitle}
              placement="right">
              {rightComponent}
            </ThumbChildren>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

ReactNativeToggleElement.propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  trackBar: PropTypes.exact({
    borderWidth: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    activeBackgroundColor: PropTypes.string,
    inActiveBackgroundColor: PropTypes.string,
    borderActiveColor: PropTypes.string,
    borderInActiveColor: PropTypes.string,
  }),
  thumbButton: PropTypes.exact({
    borderWidth: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    activeBackgroundColor: PropTypes.string,
    inActiveBackgroundColor: PropTypes.string,
  }),
  leftComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  thumbActiveComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  thumbInActiveComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  containerStyle: ViewPropTypes.style,
  trackBarStyle: ViewPropTypes.style,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
  thumbStyle: ViewPropTypes.style,
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  animationDuration: PropTypes.number
};

ReactNativeToggleElement.defaultProps = {
  onPress: () => console.warn('Please attach a method for Toggle Button'),
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
  thumbStyle: null,
  animationDuration: 350
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackBar: (trackBar) => {
    const { width, height, radius, borderWidth } = trackBar;
    const borderW = borderWidth ?? 0;
    const trackBarW = width ?? SIZE_DEFAULT.trackBarWidth;
    const trackBarH = height ?? SIZE_DEFAULT.trackBarHeight;
    const borderRadius = radius ?? SIZE_DEFAULT.trackBarRadius;

    return {
      width: trackBarW,
      height: trackBarH,
      borderRadius,
      justifyContent: 'center',
      borderWidth: borderW,
    };
  },
  thumbPosition: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbLeft: {
    left: 0,
  },
  thumbRight: {
    right: 0,
  },
  thumbButton: (thumbButton, trackBarBorderWidth) => {
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
  thumbAnimatedPosition: {
    position: 'absolute',
  },
});

export default ReactNativeToggleElement;
