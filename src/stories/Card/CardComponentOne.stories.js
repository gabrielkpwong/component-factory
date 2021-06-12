import React from "react";

import CardComponentOne from "../../factory/components/CardComponentOne/CardComponentOne.component";

export default {
  title: "Card Component One",
  component: CardComponentOne,
  argTypes: { onClick: { action: "clicked" } }
};

const Template = args => <CardComponentOne {...args} />;

export const ComponentOneStacked = Template.bind({});
ComponentOneStacked.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  buttonTitle: "View Details",
  type: "stacked"
};

export const ComponentOneHorizontal = Template.bind({});
ComponentOneHorizontal.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  buttonTitle: "View Details",
  type: "horizontal"
};
