import React from "react";

import CardComponentTwo from "../../factory/components/CardComponentTwo/CardComponentTwo.component";

export default {
  title: "Card Component Two",
  component: CardComponentTwo,
  argTypes: { onClick: { action: "clicked" } }
};

const Template = args => <CardComponentTwo {...args} />;

export const ComponentTwoStacked = Template.bind({});
ComponentTwoStacked.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  buttonTitle: "View Details",
  type: "stacked"
};

export const ComponentTwoHorizontal = Template.bind({});
ComponentTwoHorizontal.args = {
  title: "This is an example title",
  url: "https://www.google.com",
  summary: "This is some example text for description.",
  thumbnail:
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  altText: "This is some alt text",
  buttonTitle: "View Details",
  type: "horizontal"
};
