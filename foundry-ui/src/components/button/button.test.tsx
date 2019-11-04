import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";
import { ThemeProvider } from "emotion-theming";

describe("<Button /> tests", () => {

  
  it("should render as default button", () => {

    const theme = {
      colors: {
        primary: "hotpink"
      }
    };

    const {container} = render(
      <ThemeProvider theme={theme}>
    <Button onClick={() => {}}>test</Button>
    </ThemeProvider>);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render a primary and secondary button", () => {
    // Arrange
    const variant = "primary";
    const variant2 = "secondary";
    const theme = {
      colors: {
        primary: "hotpink",
        secondary: "tomato"
      }
    };

    // Act
    const tree = render(
      <ThemeProvider theme={theme}>
        <Button color={variant} onClick={() => {}}>
          test
        </Button>
        <Button color={variant2} onClick={() => {}}>
          test
        </Button>
      </ThemeProvider>
    );

    // Assert
    expect(tree.container).toMatchSnapshot();
 
  });
  it("should call the click callback handler", () => {
    // Arrange
    const content = "Hello, World!";
    const onClick = jest.fn();
    const theme = {
      colors: {
        primary: "hotpink"
      }
    };
    // Act
    const { getByText } = render(
      <ThemeProvider theme={theme}>
    <Button onClick={onClick}>{content}</Button>
    </ThemeProvider>
    );
    fireEvent.click(getByText(content));

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
