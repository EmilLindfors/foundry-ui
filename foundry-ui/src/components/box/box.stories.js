import * as React from "react";
import { storiesOf } from "@storybook/react";
import Box from "./box";

storiesOf("Box", module).add(
  "simple box",
  () => (
    <>
      <Box color="error" p={4} mb={3}>hello</Box>
      <Box width={[1, 1 / 2]} p={4} mb={3} bg="primary" color="white">
  This is a tomato box, with responsive width, some padding, and margin bottom
</Box>
    </>
  ),
  {
    info: { inline: true }
  }
);
