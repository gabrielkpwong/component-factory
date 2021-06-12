import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { Box, Card, CardContent, CardMedia, Link } from "@material-ui/core";

import Typography from "../../utilities/MuiTypography/MuiTypography";
import PlayButton from "../../utilities/svg/PlayButton";
import LightTheme from "../../themes/light-theme";
import DarkTheme from "../../themes/dark-theme";
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

  const isVideo = type && type.includes("video");
  const isLarge = type && type.includes("large");
  const isCompact = type && type.includes("compact");

  return (
    <ThemeProvider theme={isVideo ? DarkTheme : LightTheme}>
      <Card className={classes.root} elevation={0}>
        <Box component="div" className={classes.media}>
          <CardMedia component="img" image={thumbnail} alt={altText} />
          {playButton && (
            <PlayButton
              color="primary"
              className={
                isLarge ? classes.playButtonLarge : classes.playButtonSmall
              }
              fontSize="inherit"
              titleAccess={`Play icon indicating that ${title} contains a video`}
            />
          )}
        </Box>
        <CardContent className={classes.content}>
          <Typography variant={heading[type]} component="h3" gutterBottom>
            <Link href={url} color="textPrimary" className={classes.url}>
              {title}
            </Link>
          </Typography>

          {!isCompact && (
            <Typography
              gutterBottom
              variant={body[type]}
              color={color[type]}
              component="p"
            >
              {summary}
            </Typography>
          )}
          {author && (
            <Typography variant="caption" color="secondary">
              By {author}
            </Typography>
          )}
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
