/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { render } from "react-dom";
import {Button} from "./components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAbacus } from '@fortawesome/pro-regular-svg-icons'
import { faArrowAltCircleLeft } from '@fortawesome/pro-regular-svg-icons'

const theme = {
  colors: {
    primary: "hotpink",
    secondary: "tomato"
  },
  size: {
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <FontAwesomeIcon icon={faAbacus} />
        <h2>Start editing to see some magic happen!</h2>
        <Button color="primary" onClick={() => {}} iconLeft={faAbacus} >
          test
        </Button>
        <Button color="secondary" onClick={() => {}} iconRight={faArrowAltCircleLeft}>
          secondary
        </Button>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
