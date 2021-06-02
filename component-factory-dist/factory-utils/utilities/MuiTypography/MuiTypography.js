function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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


const Typography = ({
  variant,
  classes,
  className,
  ...props
}) => {
  const isCustom = Object.keys(classes).indexOf(variant) > -1;
  return /*#__PURE__*/React.createElement(MuiTypography, _extends({
    className: isCustom ? clsx(classes[variant], className) : className,
    variant: isCustom ? undefined : variant
  }, props));
};

export default withStyles(style)(Typography);