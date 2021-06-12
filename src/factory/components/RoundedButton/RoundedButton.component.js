import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const RoundedButton = withStyles(theme => ({
  root: {
    borderRadius: "25px",
    padding: theme.spacing(1)
  }
}))(Button);

export default RoundedButton;
