import React from "react";
import { Box, Card, CardContent, CardMedia, Link } from "@material-ui/core";
import Typography from "../../utilities/MuiTypography/MuiTypography";
import PlayButton from "../../utilities/svg/PlayButton";
import useStyles from "./BasicCard.style";
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
  const isLarge = type && type.includes("large");
  const isCompact = type && type.includes("compact");
  return /*#__PURE__*/React.createElement(Card, {
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
    fontSize: "inherit",
    titleAccess: `Play icon indicating that ${title} contains a video`
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
  }, "By ", author)));
}