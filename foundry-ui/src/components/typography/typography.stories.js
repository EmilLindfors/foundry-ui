import * as React from "react";
import { storiesOf } from "@storybook/react";
import { P, H5, H4, H3, H2, H1 } from "./typography";
import {Box} from ".."
import toTheme from "./adapt";
import wp2016 from "typography-theme-wordpress-2016";

const theme = toTheme(wp2016);

storiesOf("Typography", module).add(
  "simple text",
  () => (
    <Box width="500px">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <P fontWeight="bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est
        sit amet facilisis magna. Libero justo laoreet sit amet cursus sit amet
        dictum. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Sem
        integer vitae justo eget magna fermentum iaculis eu non. Nibh tortor id
        aliquet lectus proin nibh. Morbi tincidunt augue interdum velit euismod
        in. Ac tortor dignissim convallis aenean et tortor at risus. Sit amet
        risus nullam eget felis eget nunc. Morbi tincidunt augue interdum velit.
        Amet aliquam id diam maecenas ultricies mi.
      </P>
      <P>
        Vitae suscipit tellus mauris a diam maecenas sed enim. Sed viverra
        tellus in hac habitasse platea dictumst. A diam maecenas sed enim ut.
        Iaculis eu non diam phasellus vestibulum lorem. A pellentesque sit amet
        porttitor eget dolor morbi. Leo urna molestie at elementum eu. Commodo
        odio aenean sed adipiscing. Pulvinar pellentesque habitant morbi
        tristique senectus et netus. Mauris ultrices eros in cursus turpis
        massa. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam
        nulla. Donec enim diam vulputate ut pharetra sit amet aliquam.
        Pellentesque habitant morbi tristique senectus. Vulputate enim nulla
        aliquet porttitor lacus luctus accumsan tortor posuere. Ac turpis
        egestas maecenas pharetra convallis posuere morbi leo. Non curabitur
        gravida arcu ac tortor. Eget nunc lobortis mattis aliquam faucibus purus
        in massa tempor. Lacus sed turpis tincidunt id aliquet risus. Sit amet
        nisl suscipit adipiscing bibendum. Neque convallis a cras semper auctor
        neque. Lectus urna duis convallis convallis tellus id.
      </P>
      <ul>
        <li>list 1 </li>
        <li>list 2 </li>
      </ul>
    </Box>
  ),
  {
    info: { inline: true }
  }
);
