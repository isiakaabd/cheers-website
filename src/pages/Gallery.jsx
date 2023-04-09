import { Grid } from "@mui/material";
import React from "react";
import ImageLists from "./components/ImageLists";

const Gallery = () => {
  return (
    <Grid item container py={4} px={2}>
      <ImageLists />
    </Grid>
  );
};

export default Gallery;
