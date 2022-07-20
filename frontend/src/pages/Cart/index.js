import { Grid, Typography, Button } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      sx={{ mt: 2, p: 2 }}
      spacing={5}
    >
      <Grid item xs={9} sx={{ background: "white" }}>
        <Grid display="flex" justifyContent="space-between">
          <Typography variant="h4">Shopping Cart</Typography>
          <Typography>Price</Typography>
        </Grid>
        <Grid item display="flex" justifyContent="space-around" gap={5}> 
          <img src="https://via.placeholder.com/150x175.png"></img>
          <Typography variant="h6">
            Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9
            5900, 32GB 3466MHz RAM, 1TB SDD + 2TB HDD, NVI…
          </Typography>
          <Typography>$2784</Typography>
        </Grid>
        <Typography>In Stock</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>
          Your order qualifies for FREE Shipping. Choose this option at
          checkout. See details
        </Typography>
        <Typography>Subtotal (6 items): $2,970.75</Typography>
        <Typography>This order contains a gift</Typography>
        <Button variant="contained">Proceed to checkout</Button>
      </Grid>
    </Grid>
  );
}
