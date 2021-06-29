import React from "react";
import { Box, CardMedia, Link } from "@material-ui/core";
import RoundedButton from "../RoundedButton/RoundedButton.component";
import Typography from "../../utilities/MuiTypography/MuiTypography";
export default function CardComponent({
  title,
  url,
  altText,
  thumbnail,
  type,
  buttonTitle,
  headingVariants,
  onClick,
  classes,
  children
}) {
  let _media = null;

  if (thumbnail) {
    _media = /*#__PURE__*/React.createElement(Link, {
      href: url,
      color: "textPrimary"
    }, /*#__PURE__*/React.createElement(Box, {
      component: "div"
    }, /*#__PURE__*/React.createElement(CardMedia, {
      component: "img",
      image: thumbnail,
      alt: altText
    })));
  }

  let _heading = /*#__PURE__*/React.createElement(Typography, {
    variant: headingVariants[type],
    component: "h3",
    gutterBottom: true
  }, /*#__PURE__*/React.createElement(Link, {
    href: url,
    color: "textPrimary",
    className: classes.url
  }, title));

  let _button = null;

  if (buttonTitle) {
    _button = /*#__PURE__*/React.createElement(RoundedButton, {
      variant: "contained",
      color: "secondary",
      disableElevation: true,
      onClick: onClick,
      className: classes.button
    }, buttonTitle);
  }

  return children({
    media: _media,
    heading: _heading,
    button: _button
  });
}