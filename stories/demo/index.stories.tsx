import React from "react";
import { storiesOf } from "@storybook/react";

import HelloWorld from "../../src/components/HelloWorld/HelloWorld";
import StoryBookContainer from "../../src/components/layout/StoryBookContainer/StoryBookContainer";

storiesOf("Demo", module).add("Example", () => (
  <StoryBookContainer>
    <HelloWorld />
  </StoryBookContainer>
));
