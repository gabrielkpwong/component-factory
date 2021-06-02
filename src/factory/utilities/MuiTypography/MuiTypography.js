import React from "react";
import { Typography as MuiTypography, withStyles } from "@material-ui/core";
import clsx from "clsx";

const style = theme => ({
  body3: theme.typography.body3,
  body4: theme.typography.body4
});

/**
 * Overrides default material UI typography with some additional variants
 */
const Typography = ({ variant, classes, className, ...props }) => {
  const isCustom = Object.keys(classes).indexOf(variant) > -1;
  return (
    <MuiTypography
      className={isCustom ? clsx(classes[variant], className) : className}
      variant={isCustom ? undefined : variant}
      {...props}
    />
  );
};

export default withStyles(style)(Typography);
