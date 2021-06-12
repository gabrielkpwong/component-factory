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
    _media = (
      <Link href={url} color="textPrimary">
        <Box component="div">
          <CardMedia component="img" image={thumbnail} alt={altText} />
        </Box>
      </Link>
    );
  }

  let _heading = (
    <Typography variant={headingVariants[type]} component="h3" gutterBottom>
      <Link href={url} color="textPrimary" className={classes.url}>
        {title}
      </Link>
    </Typography>
  );

  let _button = null;
  if (buttonTitle) {
    _button = (
      <RoundedButton
        variant="contained"
        color="secondary"
        disableElevation
        onClick={onClick}
        className={classes.button}
      >
        {buttonTitle}
      </RoundedButton>
    );
  }

  return children({
    media: _media,
    heading: _heading,
    button: _button
  });
}
