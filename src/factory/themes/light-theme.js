import { createMuiTheme } from "@material-ui/core/styles";
import IndieFlower from "../utilities/fonts/Indie_Flower/IndieFlower-Regular.ttf";

/*The following portion of the code doesn't actually do anything right now, there is a bug
https://github.com/mui-org/material-ui/issues/18901. Keeping this code incase it gets fixed in the future.
Right now the workaround is adding fonts using @font-face from preview-head.html in storybook. When it comes to the react-app
we can just add the fonts in index.css.
*/
const indieFlower = {
  fontFamily: "IndieFlower",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('IndieFlower'),
    local('IndieFlower-Regular'),
    url(${IndieFlower}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const baseTheme = createMuiTheme();

const overridings = {
  ...baseTheme,
  name: "Light Theme",
  palette: {
    type: "light",
    primary: {
      dark: "#D50015",
      light: "#FFE9EC",
      main: "#E7131A",
      contrastText: "#FFFFFF"
    },
    secondary: {
      dark: "#1C58E3",
      light: "#E2F3FF",
      main: "#225BE4",
      contrastText: "#FFFFFF"
    },
    text: {
      primary: "#161725",
      secondary: "#727685",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    },
    divider: "#9B9FAF",
    action: {
      active: "#161725",
      hover: "#161725",
      selected: "#161725",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.12)"
    },
    error: {
      light: "#FFE9EC",
      main: "#F52518",
      dark: "#D50015"
    }
  },
  typography: {
    fontFamily: ["IndieFlower", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "1.875rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "2.25rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "2.25rem",
        lineHeight: "3.125rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.77rem",
        lineHeight: "3.625rem"
      }
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "2rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.75rem",
        lineHeight: "2.5rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.875rem",
        lineHeight: "2.625rem"
      }
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "2rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.375rem",
        lineHeight: "1.875rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        lineHeight: "2rem"
      }
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "1.25rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.375rem",
        lineHeight: "1.875rem"
      }
    },
    h5: {
      fontSize: "0.9375rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "1.25rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "1.5rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem"
      }
    },
    h6: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "0.875rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1rem",
        lineHeight: "1.375rem"
      }
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "1.625rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.375rem",
        lineHeight: "1.875rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        lineHeight: "2rem"
      }
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "0.875rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1rem",
        lineHeight: "1.25rem"
      }
    },
    body1: {
      fontFamily: ["Georgia", "Times New Roman", "Times", "sans-serif"].join(
        ","
      ),
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "1.75rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "1.625rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        lineHeight: "2.125rem"
      }
    },
    body2: {
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "1.75rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.125rem",
        lineHeight: "1.625rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        lineHeight: "2.125rem"
      }
    },
    body3: {
      fontFamily: ["Georgia", "Times New Roman", "Times", "sans-serif"].join(
        ","
      ),
      fontSize: "0.9375rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "1.25rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "1.375rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.125rem",
        lineHeight: "1.5rem"
      }
    },
    body4: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "1.25rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
        lineHeight: "1.375rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.125rem",
        lineHeight: "1.5rem"
      }
    },
    button: {
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "1.375rem"
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: "1.125rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      }
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: "0.875rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "0.875rem",
        lineHeight: "1.125rem"
      }
    }
  },
  text: {
    primary: "#161725"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [indieFlower]
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: baseTheme.spacing(2)
      }
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: baseTheme.spacing(2)
        }
      }
    },
    MuiCardActionArea: {
      root: {
        "&:hover $focusHighlight": {
          opacity: 0
        }
      },
      focusHighlight: {
        backgroundColor: "transparent"
      }
    },
    MuiLink: {
      root: {
        "&:focus-visible": {
          outline: "2px solid #225BE4"
        }
      }
    }
  }
};

const theme = createMuiTheme(overridings);

export default theme;
