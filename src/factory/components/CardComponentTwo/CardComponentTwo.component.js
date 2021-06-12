import React from "react";

import { Card, Grid } from "@material-ui/core";

import useStyles from "./CardComponentTwo.style";
import CardComponent from "../CardComponent/CardComponent.component";

export default function CardComponentTwo(props) {
  const headingVariants = {
    stacked: "h5",
    horizontal: "h4"
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
              justify={type === "stacked" ? "center" : "flex-start"}
              alignItems={type === "stacked" ? "center" : "flex-start"}
              direction="column"
            >
              {heading}
              {button}
            </Grid>
            <Grid
              item
              xs={type === "stacked" ? 12 : 6}
              container
              justify="center"
            >
              {media}
            </Grid>
          </Grid>
        </Card>
      )}
    </CardComponent>
  );
}
