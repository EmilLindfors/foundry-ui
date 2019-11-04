import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import { toTheme } from "./adapt"
import wp2016 from 'typography-theme-wordpress-2016'

const theme = toTheme()

storiesOf("Typography", module).add(
    "simple text",
    () =>
        <div>
            <div>
           <h1>test test</h1>
           <p>test</p>
            </div>
        </div>,
    {
        info: { inline: true },
    },
);
