import { fireEvent, render } from "@testing-library/react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { COLOR_DEFAULT } from "../constants";
import Toggle from "../toggle";

describe("Toggle Component", () => {
  it("should render without issue", () => {
    const { getAllByTestId } = render(<Toggle value={true} />);

    expect(getAllByTestId("ToggleButton")).toHaveLength(1);
  });

  it("should render with default value", () => {
    const component = render(<Toggle value={true} />);

    const { getAllByTestId, getByTestId } = component;

    expect(getAllByTestId("ToggleButton")).toHaveLength(1);

    const thumbButtonLeftProps = getByTestId("ThumbButtonLeft").props;

    expect(thumbButtonLeftProps.style.width).toBe(50);
    expect(thumbButtonLeftProps.style.height).toBe(50);
    expect(thumbButtonLeftProps.style.borderRadius).toBe(25);

    const thumbButtonRightProps = getByTestId("ThumbButtonRight").props;

    expect(thumbButtonRightProps.style.width).toBe(50);
    expect(thumbButtonRightProps.style.height).toBe(50);
    expect(thumbButtonRightProps.style.borderRadius).toBe(25);
  });

  describe("Render Title", () => {
    it("should render with left Title", () => {
      const component = render(<Toggle value={true} leftTitle="On" />);

      const { UNSAFE_getAllByType } = component;

      const allTexts = UNSAFE_getAllByType("Text");

      expect(allTexts).toHaveLength(1);
      expect(allTexts[0].props.children).toBe("On");
    });

    it("should render with right Title", () => {
      const component = render(<Toggle value={true} rightTitle="Off" />);

      const { UNSAFE_getAllByType } = component;

      const allTexts = UNSAFE_getAllByType("Text");

      expect(allTexts).toHaveLength(1);
      expect(allTexts[0].props.children).toBe("Off");
    });

    it("should render with left Title, right Title", () => {
      const component = render(
        <Toggle value={true} leftTitle="On" rightTitle="Off" />
      );

      const { UNSAFE_getAllByType } = component;

      const allTexts = UNSAFE_getAllByType("Text");

      expect(allTexts).toHaveLength(2);

      expect(allTexts[0].props.style.color).toBe(COLOR_DEFAULT.thumbInActive);
      expect(allTexts[0].props.children).toBe("On");
      expect(allTexts[1].props.children).toBe("Off");
      expect(allTexts[1].props.style.color).toBe(COLOR_DEFAULT.textActive);
    });
  });

  describe("Custom component", () => {
    it("should render with custom Left component and Right component", () => {
      const defaultValue = true;

      const component = render(
        <Toggle
          value={defaultValue}
          leftComponent={
            <View testID="LeftComponent">
              <Text>Left 1</Text>
              <Text>Left 2</Text>
            </View>
          }
          rightComponent={
            <View testID="RightComponent">
              <Text>Right 1</Text>
              <Text>Right 2</Text>
            </View>
          }
        />
      );

      const { getByTestId } = component;
      const LeftComponentEle = getByTestId("LeftComponent");

      expect(LeftComponentEle.props.children).toHaveLength(2);

      const leftChild1 = LeftComponentEle.props.children[0];
      expect(leftChild1.type.displayName).toBe("Text");
      expect(leftChild1.props.children).toBe("Left 1");

      const leftChild2 = LeftComponentEle.props.children[1];
      expect(leftChild2.type.displayName).toBe("Text");
      expect(leftChild2.props.children).toBe("Left 2");

      const RightComponentEle = getByTestId("RightComponent");

      expect(RightComponentEle.props.children).toHaveLength(2);

      const rightChild1 = RightComponentEle.props.children[0];
      expect(rightChild1.type.displayName).toBe("Text");
      expect(rightChild1.props.children).toBe("Right 1");

      const rightChild2 = RightComponentEle.props.children[1];
      expect(rightChild2.type.displayName).toBe("Text");
      expect(rightChild2.props.children).toBe("Right 2");
    });

    it("should render with custom Left Component", () => {
      const defaultValue = true;

      const component = render(
        <Toggle
          value={defaultValue}
          leftComponent={
            <Text testID="LeftComponent" style={{ fontSize: 50 }}>
              Left 1
            </Text>
          }
        />
      );

      const { getByTestId } = component;
      const LeftComponentEle = getByTestId("LeftComponent");

      expect(LeftComponentEle.props.children).toBe("Left 1");
      expect(LeftComponentEle.props.style.fontSize).toBe(50);
    });

    it("render with custom Right Component", () => {
      const defaultValue = true;

      const component = render(
        <Toggle
          value={defaultValue}
          rightComponent={
            <Text testID="RightComponent" style={{ fontSize: 70 }}>
              Right
            </Text>
          }
        />
      );

      const { getByTestId } = component;
      const RightComponentEle = getByTestId("RightComponent");

      expect(RightComponentEle.props.children).toBe("Right");
      expect(RightComponentEle.props.style.fontSize).toBe(70);
    });
  });

  describe("trackBar", () => {
    it("should render with custom trackBar value load active style when value is true", () => {
      const defaultValue = true;

      const component = render(
        <Toggle
          value={defaultValue}
          trackBar={{
            width: 200,
            height: 70,
            radius: 35,
            activeBackgroundColor: "red",
            inActiveBackgroundColor: "green",
          }}
        />
      );

      const { getByTestId } = component;

      const activeStyle = getByTestId("TrackBar").props.style;

      expect(activeStyle.width).toBe(200);
      expect(activeStyle.height).toBe(70);
      expect(activeStyle.borderRadius).toBe(35);
      expect(activeStyle.backgroundColor).toBe("red");
    });

    it("should render default value and custom trackBar style inactive style when value is false", () => {
      const defaultValue = false;

      const component = render(
        <Toggle
          value={defaultValue}
          trackBar={{
            activeBackgroundColor: "red",
            inActiveBackgroundColor: "green",
          }}
        />
      );

      const { getByTestId } = component;

      const style = getByTestId("TrackBar").props.style;

      expect(style.width).toBe(150);
      expect(style.height).toBe(50);
      expect(style.borderRadius).toBe(25);
      expect(style.backgroundColor).toBe("green");
    });
  });

  describe("ThumbButton", () => {
    it("should render with custom thumbBtn value load active style when value is true", () => {
      const defaultValue = true;
      const thumbButtonStyle = {
        width: 20,
        height: 20,
        radius: 10,
        activeBackgroundColor: "white",
        inActiveBackgroundColor: "grey",
      };
      const component = render(
        <Toggle value={defaultValue} thumbButton={thumbButtonStyle} />
      );

      const { getByTestId } = component;

      const thumbLeft = getByTestId("ThumbButtonLeft").props.style;
      const thumbRight = getByTestId("ThumbButtonRight").props.style;
      const thumbBtn = getByTestId("ThumbButton").props.style;

      expect(thumbLeft.width).toBe(20);
      expect(thumbLeft.height).toBe(20);
      expect(thumbLeft.borderRadius).toBe(10);

      expect(thumbRight.width).toBe(20);
      expect(thumbRight.height).toBe(20);
      expect(thumbRight.borderRadius).toBe(10);

      expect(thumbBtn.width).toBe(20);
      expect(thumbBtn.height).toBe(20);
      expect(thumbBtn.borderRadius).toBe(10);
      expect(thumbBtn.backgroundColor).toBe(
        thumbButtonStyle.activeBackgroundColor
      );
    });

    it("should render default value and custom thumbBtn value load active style when value is true", () => {
      const defaultValue = false;

      const thumbButtonStyle = {
        activeBackgroundColor: "white",
        inActiveBackgroundColor: "grey",
      };
      const component = render(
        <Toggle value={defaultValue} thumbButton={thumbButtonStyle} />
      );

      const { getByTestId } = component;

      const thumbBtn = getByTestId("ThumbButton").props.style;

      expect(thumbBtn.width).toBe(50);
      expect(thumbBtn.height).toBe(50);
      expect(thumbBtn.borderRadius).toBe(25);
      expect(thumbBtn.backgroundColor).toBe(
        thumbButtonStyle.inActiveBackgroundColor
      );
    });
  });

  describe("onPress events", () => {
    it("should be call default onPress events if not bind event", () => {
      console.warn = jest.fn();
      const defaultValue = true;
      const component = render(<Toggle value={defaultValue} />);
      const warn = jest.spyOn(console, "warn").mockImplementation(() => {});

      const { getByTestId } = component;
      fireEvent.press(getByTestId("ToggleButton"));

      expect(warn).toBeCalledWith("Please attach a method for Toggle Button");
    });

    it("should be call onPress events", async () => {
      const mockOnPressFn = jest.fn();
      const defaultValue = true;
      const component = render(
        <Toggle value={defaultValue} onPress={mockOnPressFn} />
      );

      const { getByTestId } = component;
      fireEvent.press(getByTestId("ToggleButton"));

      expect(mockOnPressFn).toHaveBeenCalledTimes(1);
      console.log(getByTestId("ToggleButton").props.disabled);
    });

    it("should not be call when disabled is true", async () => {
      const mockOnPressFn = jest.fn();
      const defaultValue = true;
      const component = render(
        <View testID="toggleElement">
          <Toggle
            disabled={true}
            value={defaultValue}
            onPress={mockOnPressFn}
          />
        </View>
      );
      const { getByTestId } = component;

      fireEvent.press(getByTestId("toggleElement"));
      expect(getByTestId("toggleElement").props.children.props.value).toBe(
        defaultValue
      );
    });
  });

  describe("disable style", () => {
    it("should render disable style", () => {
      const disableStyle = {
        color: "black",
      };

      const component = render(
        <Toggle
          value={true}
          disabledTitleStyle={disableStyle}
          disabled={true}
          leftTitle="On"
          rightTitle="Off"
        />
      );

      const { UNSAFE_getAllByType } = component;

      const allTexts = UNSAFE_getAllByType("Text");

      expect(allTexts).toHaveLength(2);
      expect(allTexts[0].props.style.color).toBe(disableStyle.color);
      expect(allTexts[1].props.style.color).toBe(disableStyle.color);
    });
  });
});
