import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, CancelButton, SubmitButton } from "..";
import { ThemeProvider } from "emotion-theming";
import { faArrowAltCircleRight } from "@fortawesome/pro-regular-svg-icons";

const color = "primary";
const color2 = "secondary";
const color3 = "success";
const color4 = "warning";
const color5 = "error";
const color6 = "info";

const theme = {
  colors: {
    primary: "#4b6269",
    secondary: "teal",
    success: "green",
    warning: "#ff860b",
    error: "#fc7689",
    info: "#50cad1"
  },
  sizes: {
    xs: "0.6em",
    sm: "0.8em",
    md: "1em",
    lg: "1.2em",
    xl: "1.5em",
    xxl: "2em"
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "36px",
    xxl: "48px"
  }
};

storiesOf("Button", module)
  .add(
    "simple button",
    () => (
      <ThemeProvider theme={theme}>
        <div>
          <Button color={color} onClick={action("button clicked")}>
            {color}
          </Button>
          <Button color={color2} onClick={action("button clicked")}>
            {color2}
          </Button>
          <Button color={color3} onClick={action("button clicked")}>
            {color3}
          </Button>
          <Button color={color4} onClick={action("button clicked")}>
            {color4}
          </Button>
          <Button color={color5} onClick={action("button clicked")}>
            {color5}
          </Button>
          <Button color={color6} onClick={action("button clicked")}>
            {color6}
          </Button>
        </div>
        <div>
          <Button onClick={action("button clicked")} size="xs">
            xs
          </Button>
          <Button onClick={action("button clicked")} size="sm">
            sm
          </Button>
          <Button onClick={action("button clicked")} size="md">
            md
          </Button>
          <Button onClick={action("button clicked")} size="lg">
            lg
          </Button>
          <Button onClick={action("button clicked")} size="xl">
            xl
          </Button>
          <Button onClick={action("button clicked")} size="xxl">
            xxl
          </Button>
        </div>
        <div>
          <Button
            color={color}
            variant="filled"
            onClick={action("button clicked")}
          >
            filled
          </Button>
          <Button
            color={color}
            variant="filled"
            round
            onClick={action("button clicked")}
          >
            filled round
          </Button>
          <Button
            color={color}
            variant="outlined"
            onClick={action("button clicked")}
          >
            outlined
          </Button>
          <Button
            color={color}
            variant="outlined"
            round
            onClick={action("button clicked")}
          >
            outlined round
          </Button>
          <Button
            color={color}
            variant="simple"
            onClick={action("button clicked")}
          >
            simple
          </Button>
          <Button
            color={color}
            variant="simple"
            round
            onClick={action("button clicked")}
          >
            simple round
          </Button>
        </div>
      </ThemeProvider>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    "with icons",
    () => (
      <ThemeProvider theme={theme}>
        <Button
          color={color}
          onClick={action("button clicked")}
          iconLeft={faArrowAltCircleRight}
        >
          left icon
        </Button>
        <Button
          color={color}
          onClick={action("button clicked")}
          iconRight={faArrowAltCircleRight}
        >
          right icon
        </Button>
        <Button
          color={color}
          onClick={action("button clicked")}
          iconRight={faArrowAltCircleRight}
        />
        <Button
          color={color}
          onClick={action("button clicked")}
          round
          iconRight={faArrowAltCircleRight}
        />
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="outlined"
          iconRight={faArrowAltCircleRight}
        >
          outlined icon
        </Button>
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="outlined"
          iconRight={faArrowAltCircleRight}
        />
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="outlined"
          round
          iconRight={faArrowAltCircleRight}
        />
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="simple"
          iconRight={faArrowAltCircleRight}
        >
          simple icon
        </Button>
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="simple"
          iconRight={faArrowAltCircleRight}
        />
        <Button
          color={color}
          onClick={action("button clicked")}
          variant="simple"
          round
          iconRight={faArrowAltCircleRight}
        />
      </ThemeProvider>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    "custom buttons",
    () => (
      <>
        <SubmitButton onClick={action("button clicked")} />
        <CancelButton variant="filled" onlyIcon round onClick={action("button clicked")} />
      </>
    ),
    {
      info: { inline: true }
    }
  );
