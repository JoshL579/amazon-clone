import { Box, Drawer, Typography } from "@mui/material";
import React from "react";

const SingleSideBar = ({ drawer, setDrawer }) => {
  return (
    <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
      <Box width="50vw">
        <Typography>Cart Info</Typography>
      </Box>
    </Drawer>
  );
};

export default SingleSideBar;
