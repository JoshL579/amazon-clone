import React from "react";
import { Drawer, Typography } from "@mui/material";

const Drawer = () => {
  return (
    <Drawer anchor="left">
      <Box p={2} width="250px" textAlign="center" role="presentation">
        <Typography variant="h6">Side Panel</Typography>
      </Box>
    </Drawer>
  );
};

export default Drawer;
