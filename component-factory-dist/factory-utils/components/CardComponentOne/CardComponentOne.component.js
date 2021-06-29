function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Card, Grid } from "@material-ui/core";
import useStyles from "./CardComponentOne.style";
import CardComponent from "../CardComponent/CardComponent.component";
export default function CardComponentOne(props) {
  const headingVariants = {
    stacked: "h4",
    horizontal: "h5"
  };
  const {
    type
  } = props;
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(CardComponent, _extends({
    classes: classes,
    headingVariants: headingVariants
  }, props), ({
    media,
    heading,
    button
  }) => /*#__PURE__*/React.createElement(Card, {
    className: classes.root,
    elevation: 0
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: type === "stacked" ? 12 : 6,
    container: true
  }, media), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: type === "stacked" ? 12 : 6,
    container: true,
    justify: type === "stacked" ? "center" : "flex-start",
    alignItems: type === "stacked" ? "center" : "flex-start",
    direction: "column"
  }, heading, button))));
}