import React from "react";

import DarkTheme from "../../factory/themes/dark-theme";
import { ThemeProvider } from "@material-ui/core/styles";

import BasicCard from "../../factory/components/BasicCard/BasicCard.component";

export default {
  title: "Basic Card",
  component: BasicCard
};

const Template = args => <BasicCard {...args} />;

export const LargeImageCard = Template.bind({});
LargeImageCard.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  author: "Gabriel Wong",
  type: "large"
};

export const CompactImageCard = Template.bind({});
CompactImageCard.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  type: "compact"
};

export const LargeDarkThemeVideoCard = Template.bind({});
LargeDarkThemeVideoCard.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  author: "Gabriel Wong",
  type: "large_video",
  playButton: true
};
LargeDarkThemeVideoCard.decorators = [
  Story => (
    <ThemeProvider theme={DarkTheme}>
      <Story />
    </ThemeProvider>
  )
];

export const CompactDarkThemeVideoCard = Template.bind({});
CompactDarkThemeVideoCard.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  summary: "This is some example text for description.",
  type: "compact_video",
  playButton: true
};
CompactDarkThemeVideoCard.decorators = [
  Story => (
    <ThemeProvider theme={DarkTheme}>
      <Story />
    </ThemeProvider>
  )
];
