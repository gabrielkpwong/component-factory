import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    width: "600px"
  },
  media: {
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    position: "relative",
    display: "block",
    height: 0,
    paddingBottom: "56.25%", // 16:9 Aspect Ratio
    overflow: "hidden"
  },
  playButtonLarge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    fontSize: "46px !important",
    [theme.breakpoints.up("md")]: {
      top: "40px",
      right: "40px",
      fontSize: "58px !important"
    }
  },
  playButtonSmall: {
    position: "absolute",
    top: "12px",
    right: "12px",
    fontSize: "34px !important",
    [theme.breakpoints.up("md")]: {
      top: "16px",
      right: "16px",
      fontSize: "42px !important"
    }
  },
  url: {
    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: "3px",
      textUnderlinePosition: "under",
      textDecorationColor: `${theme.palette.secondary.main} !important`
    },
    "&::before": {
      bottom: 0,
      content: "''",
      display: "block",
      left: 0,
      opacity: 0,
      overflow: "hidden",
      position: "absolute",
      right: 0,
      textIndent: "-999em",
      top: 0,
      whiteSpace: "nowrap",
      zIndex: 1
    }
  },
  content: {
    margin: "24px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "4px 0"
    }
  }
}));

export default useStyles;
