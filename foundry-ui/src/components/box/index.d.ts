import * as StyledSystem from "styled-system";
import * as Emotion from "@emotion/styled";
import * as React from "react";

export type BoxProps = BoxHTMLProps &
StyledSystem &
Emotion

declare const Box: React.FC<BoxProps>;

export default Box;