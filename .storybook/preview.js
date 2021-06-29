import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import LightTheme from "../src/factory/themes/light-theme";
import DarkTheme from "../src/factory/themes/dark-theme";

export const decorators = [
  withMuiTheme({
    "Light Theme": LightTheme,
    "Dark Theme": DarkTheme
  })
];
