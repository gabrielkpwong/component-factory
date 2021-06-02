// your app's webpack.config.js
//const custom = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-material-ui"
  ]
  /*webpackFinal: config => {
    console.log(config.module.rules);
    config.module.rules = config.module.rules.filter(
      rule =>
        !(
          rule.test &&
          rule.test.toString().length &&
          rule.test.toString().match(/ttf/)
        )
    );

    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      ]
    });

    return config;

    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules }
    };
  }*/
};
