import { Grid } from "@mui/material";
import React from "react";
import { theme } from "../../../theme/theme";

const BackToTop = () => {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" backgroundColor={theme.palette.primary.light} minHeight="40px" color="white"> 
      <Grid item >Back to top</Grid>
    </Grid>
  );
};

export default BackToTop;
