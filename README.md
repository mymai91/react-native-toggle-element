# React-Native-Toggle-Element 2.0 [![CircleCI](https://circleci.com/gh/mymai91/react-native-toggle-element.svg?style=svg)](https://circleci.com/gh/mymai91/react-native-toggle-element)

The library has been rewritten with Typescript support in version `2.0.0`. This library will work well on both React Native and Expo, please check out the examples folder.

![ezgif com-video-to-gif (7)](https://user-images.githubusercontent.com/6791942/80718297-8edea800-8b2c-11ea-8f69-c7c3f98ca545.gif)

![toggle](https://user-images.githubusercontent.com/6791942/80785013-854b5380-8bb1-11ea-9c7a-8b8975381642.gif)

## Installation

```bash
yarn add react-native-toggle-element

# or with npm

npm install react-native-toggle-element
```

## Usage

### Init value

```jsx
import React, { useState } from "react";
import Toggle from "react-native-toggle-element";

const [toggleValue, setToggleValue] = useState(false);
```

### Toggle with default components

![toggle-no-content](https://user-images.githubusercontent.com/6791942/80714462-8c2d8400-8b27-11ea-996d-65fc4bae7673.gif)

```jsx
<Toggle value={toggleValue} onPress={(val) => setToggleValue(val)} />
```

### Toggle with left title

![toggle-with-left-content](https://user-images.githubusercontent.com/6791942/80714954-3dccb500-8b28-11ea-8039-625695eb6aa4.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="On"
/>
```

### Toggle with right title

![toggle-with-right-content](https://user-images.githubusercontent.com/6791942/80715454-f692f400-8b28-11ea-80e1-d466496a9629.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Right"
/>
```

### Toggle with left title and right Title

![toggle-left-right-title](https://user-images.githubusercontent.com/6791942/80715737-61442f80-8b29-11ea-9c15-c0403b040b33.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Left"
  rightTitle="Right"
/>
```

### Toggle with custom left component

![toggle-left-component](https://user-images.githubusercontent.com/6791942/80716248-0101bd80-8b2a-11ea-8d2c-57fee6dccc42.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftComponent={<Icon name="credit" width="30" height="30" fill={"#3BD2B5"} />}
/>
```

### Toggle with custom right component

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/6791942/80716446-3b6b5a80-8b2a-11ea-9447-96631e308ce7.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  rightComponent={<Icon name="plus" width="30" height="30" fill={"#3BD2B5"} />}
/>
```

### Toggle with mixed left & right components

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/6791942/80716660-81c0b980-8b2a-11ea-988d-10a7ec98c18e.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  disabled
  leftComponent={
    <Icon name="credit" width="30" height="30" fill={Colors.tabIconSelected} />
  }
  rightComponent={
    <Icon name="plus" width="30" height="30" fill={Colors.tabIconSelected} />
  }
/>
```

### Toggle with thumb button components

![toggle](https://user-images.githubusercontent.com/6791942/80785013-854b5380-8bb1-11ea-9c7a-8b8975381642.gif)

```jsx
<ToggleButton
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  thumbActiveComponent={
    <Icon name="sun" width="40" height="40" fill={"#3BD2B5"} />
  }
  thumbInActiveComponent={
    <Icon name="night" width="40" height="40" fill={"#03452C"} />
  }
  trackBar={{
    activeBackgroundColor: "#9ee3fb",
    inActiveBackgroundColor: "#3c4145",
    borderActiveColor: "#86c3d7",
    borderInActiveColor: "#1c1c1c",
    borderWidth: 5,
    width: 100,
  }}
/>
```

### Disabled Toggle

![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/6791942/80717417-7d48d080-8b2b-11ea-8e5b-de57801eeba2.gif)

```jsx
<Toggle
  disabled
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Left"
  rightTitle="Right"
/>
```

## Modify style

### Modify TrackBar Size

![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/6791942/80717739-cbf66a80-8b2b-11ea-8651-1e95b43f9cce.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Left"
  rightTitle="Right"
  trackBar={{
    width: 200,
    height: 50,
    radius: 25,
  }}
/>
```

### Modify TrackBar Style

**TrackBarStyle will override Border active color & Border inactive color**

![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/6791942/80718009-2c85a780-8b2c-11ea-8f61-9b2f76ad3f6b.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  trackBarStyle={{
    borderColor: "green",
  }}
  trackBar={{
    borderWidth: 2,
  }}
/>
```

### Modify ThumbButton

![ezgif com-video-to-gif (7)](https://user-images.githubusercontent.com/6791942/80718297-8edea800-8b2c-11ea-8f69-c7c3f98ca545.gif)

```jsx
<Toggle
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Left"
  rightTitle="Right"
  thumbButton={{
    width: 60,
    height: 60,
    radius: 30,
  }}
/>
```

### Modify Disabled Toggle

![ezgif com-video-to-gif (8)](https://user-images.githubusercontent.com/6791942/80718502-ce0cf900-8b2c-11ea-9d2a-e4748a180516.gif)

```jsx
<Toggle
  disabled
  disabledTitleStyle={{ color: "red" }}
  disabledStyle={{ backgroundColor: "gray", opacity: 0.3 }}
  value={toggleValue}
  onPress={(newState) => setToggleValue(newState)}
  leftTitle="Left"
  rightTitle="Right"
/>
```

## Props

- containerStyle
- disabled
- disabledStyle
- disabledTitleStyle
- leftComponent
- leftTitle
- rightComponent
- rightTitle
- thumbActiveComponent
- thumbInActiveComponent
- thumbStyle
- thumbButton
- trackBar
- trackBarStyle
- animationDuration

## Reference

![Untitled_Artwork 2](https://user-images.githubusercontent.com/6791942/80615032-c3d9f480-8a71-11ea-8b46-94d37ed5dd62.png)

| Type                       | Default |
| -------------------------- | :-----: |
| React element or component |  none   |

`containerStyle` style for main container

| Type  | Default |
| ----- | :-----: |
| style |  none   |

`disabled` disable the Toggle Button component (optional)

| Type    | Default |
| ------- | :-----: |
| boolean |  false  |

`disabledStyle` styling for Toggle Button Component for disabled (optional)

| Type                | Default |
| ------------------- | :-----: |
| View style (object) |  none   |

`disabledTitleStyle` styling for **leftTitle & right Title**(optional) when Toggle Button set with status is disabled(optional). If you want to set disable style for Active & Inactive you should use custom left component or custom right component

| Type                 | Default |
| -------------------- | :-----: |
| Text style (object)) |  none   |

`leftComponent` define your left component here

| Type                       | Default |
| -------------------------- | :-----: |
| React element or component |  none   |

`leftTitle` button left title (optional)

| Type   | Default |
| ------ | :-----: |
| string |  none   |

`rightComponent` define your right component here (optional)

| Type                       | Default |
| -------------------------- | :-----: |
| React element or component |  none   |

`rightTitle` button right title (optional)

| Type   | Default |
| ------ | :-----: |
| string |  none   |

`thumbActiveComponent` define your thumb button component when status is active (optional)

| Type                       | Default |
| -------------------------- | :-----: |
| React element or component |  none   |

`thumbInActiveComponent` define your thumb button component when status is inactive (optional)

| Type                       | Default |
| -------------------------- | :-----: |
| React element or component |  none   |

`thumbStyle` thumb button style (optional). Styling will override the value from **thumbButton** props

| Type                | Default |
| ------------------- | :-----: |
| View style (object) |  none   |

`thumbButton` define to change size and radius and color depend on active / inactive status (optional)

| Type                    | Default |
| ----------------------- | :-----: |
| borderWidth             |    0    |
| width                   |   50    |
| height                  |   50    |
| radius                  |   25    |
| activeBackgroundColor   | #fde2e2 |
| inActiveBackgroundColor | #ffb6b6 |

`trackBar` define to change size and radius and color depend on active / inactive status (optional)

| Type                    |   Default   |
| ----------------------- | :---------: |
| borderWidth             |      0      |
| width                   |     50      |
| height                  |     50      |
| radius                  |     25      |
| activeBackgroundColor   |   #fde2e2   |
| inActiveBackgroundColor |   #ffb6b6   |
| borderActiveColor       | transparent |
| borderInActiveColor     | transparent |

`trackBarStyle` trackbar style (optional). Styling will override the value from **trackBar** props

| Type                | Default |
| ------------------- | :-----: |
| View style (object) |  none   |

`animationDuration` duration of the thumb button animation (optional).

| Type   | Default |
| ------ | :-----: |
| number |   350   |
