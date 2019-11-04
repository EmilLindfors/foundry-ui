import React from "react";
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  colors: {
    primary: "#4b6269",
    secondary: "teal",
    success: "green",
    warning: '#ff860b',
    error: '#fc7689',
    info: "#50cad1"
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
 xxl: "48px"
}
};


addDecorator(withA11y);
addParameters({
  options: {
    brandTitle: 'CRA TypeScript Kitchen Sink',
    brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-ts-kitchen-sink',
  },
});
addDecorator(story => (
  <>
   <ThemeProvider theme={theme}>
    {story()}
    </ThemeProvider>
  </>
));

function loadStories() {
  // automatically import all story js files that end with *.stories.tsx
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);