<p align="center">
  <img src="/readme-images/storybook.png" alt="StoryBook Logo" width="200"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/readme-images/material-ui.png" alt="Material UI logo" width="200"/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="/readme-images/aws-codeartifact.png" alt="AWS Code Artifact logo" width="200"/>
</p>

# Storybook Example with Self-hosted Custom Fonts and Material UI Theme, then exporting components to NPM Package in AWS CodeArtifact

### Storybook

My team needed a way of showing components to the stakeholders, the QA team, and the design team. By using storybook we are able to create components quickly have a place to display each component by passing it editable mock data using Template args.

```
import React from "react";

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
```

### Self-Hosted Fonts

One issue I encountered that was not documented well, was adding [custom self-hosted fonts](https://material-ui.com/customization/typography/#self-hosted-fonts) for Material UI. After doing a lot of digging, I found out there is still an outstanding issue dealing with self-hosted custom fonts ([https://github.com/mui-org/material-ui/issues/18901](https://github.com/mui-org/material-ui/issues/18901)). The work around solution I found is adding the @font-face in preview-head.html in .storybook folder.

![Storybook Folder Structure](/readme-images/storybook-structure.png)

```
<style type="text/css">
  @font-face {
    font-family: "IndieFlower";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("factory/utilities/fonts/Indie_Flower/IndieFlower-Regular.ttf")
      format("truetype");
  }
</style>
```

Next, make sure script to start storybook points to .src in package.json.

```
"scripts": {
  ...
  "storybook": "start-storybook -p 6006 -s ./src",
  ...
}
```

### Exporting components to NPM Package in AWS CodeArtifact

We need to add babel to convert to JSX syntax in order for the package to be used properly.
First, start off by installing @babel/cli as a dev dependency.

```
npm install --save-dev @babel/cli
```

Next, add @babel/preset-react as well.

```
npm install --save-dev @babel/preset-react
```

We will now add a script in package.json to add the transpiled code from `src/factory` into an output folder, `component-factory-dist`, in our case.

```
"scripts": {
  ...
  "distribute": "rm -rf component-factory-dist/factory-utils && mkdir -p component-factory-dist/factory-utils && babel src/factory -d component-factory-dist/factory-utils --copy-files"
}
```

Run the `distribute` script we just created.

```
npm run distribute
```

The folder that gets created contains all the components, themes, and utilities that will be need for the npm package.

![Component Factory](/readme-images/factory.png)

Create a package.json file in the created folder making sure it is OUTSIDE the `factory-utils` folder so that it doesn't removed and overwritten when running the `distribute` script again. Add package configuration needed for this. I would look over the Amazon's documentation for [this](https://aws.amazon.com/blogs/devops/publishing-private-npm-packages-aws-codeartifact/). It should look somewhat like the following:

```
{
  "name": "@company/component-factory-dist",
  "version": "1.0.0",
  "description": "NPM Package",
  "scripts": {
    "getauthtoken": "npm config set //<COMPANY>-<ARN>.d.codeartifact.us-east-1.amazonaws.com/npm/Component-Factory/:always-auth=true",
    "setnpm": "npm config set registry=https://<COMPANY>-<ARN>.d.codeartifact.us-east-1.amazonaws.com/npm/Component-Factory/",
    "co:login": "aws codeartifact login --tool npm --repository Component-Factory --domain <COMPANY> --profile saml --region us-east-1",
    "resetRegistry": "npm config set registry=https://registry.npmjs.com/",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Gabriel Wong",
  "license": "ISC"
}
```

### In order to publish a package to CodeArtifact you will need to do the following:

- Make sure you have the latest AWSCLI Version 2.
- cd into `media-component-factory-dist`
- edit the package.json and update the version number if you have previously pushed the package to Code Artifact
- login using saml2aws login
- npm run getauthtoken
- npm run setnpm
- npm run co:login
- npm publish
- npm run resetRegistry _make sure you set the registry back to the default npm registry_

Of course you would need to set up the AWS CodeArtifact beforehand. I will not be covering it here. You can find the documentation [here](https://aws.amazon.com/blogs/devops/integrating-aws-codeartifact-package-mgmt-flow/).
