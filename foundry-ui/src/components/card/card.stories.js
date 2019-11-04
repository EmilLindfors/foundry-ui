import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Card } from "..";
import { ThemeProvider } from "emotion-theming";


export const theme = {
  colors: {
      primary: "#4b6269",
      secondary: "teal",
      success: "green",
      warning: "#ff860b",
      error: "#fc7689",
      info: "#50cad1",
    },
  sizes: {
    xs: "0.6em",
    sm: "0.8em",
    md: "1em",
    lg: "1.2em",
    xl: "1.5em",
    xxl: "2em",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "36px",
    xxl: "48px",
  }
};


storiesOf("Card", module).add(
    "simple card",
    () =>
        <ThemeProvider theme={theme}>
            <div>
                <Card color="primary">hello</Card>
                <Card color="secondary">hello</Card>
                <Card color="error">hello</Card>
                <Card color="secondary" variant="muted">hello</Card>
                <Card color="primary" variant="outlined">hello</Card>

            </div>
        </ThemeProvider>,
  {
    info: { inline: true },
  },
);
