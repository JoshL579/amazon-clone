import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Paper sx={{ height: 100 }} elevation={0}>
        <Typography variant="h5">Your Amazon Cart is empty.</Typography>
        <Link to="/" className="global-link">
          <Typography variant="body1">Continue Shopping</Typography>
        </Link>
      </Paper>
    </Box>
  );
};

export default CartEmpty;
