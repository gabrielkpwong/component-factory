import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
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
  button: {
    display: "inline-block",
    marginBottom: theme.spacing(2),
    zIndex: 2,
    position: "relative"
  }
}));
export default useStyles;