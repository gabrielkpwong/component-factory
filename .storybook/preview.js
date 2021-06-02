import { muiTheme } from "storybook-addon-material-ui";
import LightTheme from "../src/factory/themes/light-theme";
import DarkTheme from "../src/factory/themes/dark-theme";

export const decorators = [muiTheme([LightTheme, DarkTheme])];
