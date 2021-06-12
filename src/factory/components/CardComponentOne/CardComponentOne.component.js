import React from "react";

import { Card, Grid } from "@material-ui/core";

import useStyles from "./CardComponentOne.style";
import CardComponent from "../CardComponent/CardComponent.component";

export default function CardComponentOne(props) {
  const headingVariants = {
    stacked: "h4",
    horizontal: "h5"
  };

  const { type } = props;
  const classes = useStyles();

  return (
    <CardComponent
      classes={classes}
      headingVariants={headingVariants}
      {...props}
    >
      {({ media, heading, button }) => (
        <Card className={classes.root} elevation={0}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={type === "stacked" ? 12 : 6}
              container
              justify="center"
            >
              {media}
            </Grid>
            <Grid
              item
              xs={type === "stacked" ? 12 : 6}
              container
              justify={type === "stacked" ? "center" : "flex-start"}
              alignItems={type === "stacked" ? "center" : "flex-start"}
              direction="column"
            >
              {heading}
              {button}
            </Grid>
          </Grid>
        </Card>
      )}
    </CardComponent>
  );
}
