import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useStyles from "./BasicCard.style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "../../utilities/MuiTypography/MuiTypography";
import Box from "@material-ui/core/Box";
import PlayButton from "../../utilities/svg/PlayButton";
import LightTheme from "../../themes/light-theme";
import DarkTheme from "../../themes/dark-theme";
export default function BasicCard({
  title,
  url,
  altText,
  summary,
  thumbnail,
  author,
  type,
  playButton = false
}) {
  const classes = useStyles();
  const heading = {
    large: "h2",
    compact: "h4",
    large_video: "h3",
    compact_video: "h3"
  };
  const body = {
    large: "caption",
    large_video: "caption"
  };
  const color = {
    large: "textPrimary",
    compact: "textPrimary",
    large_video: "textSecondary",
    compact_video: "textSecondary"
  };
  const isVideo = type && type.includes("video");
  const isLarge = type && type.includes("large");
  const isCompact = type && type.includes("compact");
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: isVideo ? DarkTheme : LightTheme
  }, /*#__PURE__*/React.createElement(Card, {
    className: classes.root,
    elevation: 0
  }, /*#__PURE__*/React.createElement(Box, {
    component: "div",
    className: classes.media
  }, /*#__PURE__*/React.createElement(CardMedia, {
    component: "img",
    image: thumbnail,
    alt: altText
  }), playButton && /*#__PURE__*/React.createElement(PlayButton, {
    color: "primary",
    className: isLarge ? classes.playButtonLarge : classes.playButtonSmall,
    fontSize: "inherit"
  })), /*#__PURE__*/React.createElement(CardContent, {
    className: classes.content
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: heading[type],
    component: "h3",
    gutterBottom: true
  }, /*#__PURE__*/React.createElement(Link, {
    href: url,
    color: "textPrimary",
    className: classes.url
  }, title)), !isCompact && /*#__PURE__*/React.createElement(Typography, {
    gutterBottom: true,
    variant: body[type],
    color: color[type],
    component: "p"
  }, summary), author && /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    color: "secondary"
  }, "By ", author))));
}