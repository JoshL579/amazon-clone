import { Grid, Typography, Button, Checkbox, Divider } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Header from "../../components/Header";
import CartSelect from "./CartSelect";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

const styles = {
  btn: {
    background: theme.palette.secondary.light,
    color: "black",
  },
};

export default function Home() {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      sx={{ p: 5 }}
      spacing={5}
    >
      <Grid
        item
        xs={9}
        sx={{ background: "white" }}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Grid display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight={700}>
            Shopping Cart
          </Typography>
          <Typography>Price</Typography>
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="space-around"
          gap={5}
          sx={{ pl: 5 }}
        >
          <img src="https://via.placeholder.com/150x175.png"></img>
          <Grid>
            <Typography variant="h6">
              Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9
              5900, 32GB 3466MHz RAM, 1TB SDD + 2TB HDD, NVI…
            </Typography>
            <Typography color="#007600">In Stock</Typography>
            <Typography variant="body2">
              Eligible for FREE Shipping & FREE Returns
            </Typography>
            <Grid display="flex" alignItems="center">
              <Checkbox />
              <Typography variant="body2">
                This is a giftThis is a gift Learn more
              </Typography>
            </Grid>
            <Grid display="flex" alignItems="center" gap={2}>
              <CartSelect />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="body2">Delete</Typography>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography variant="body2">Save for Later</Typography>
            </Grid>
          </Grid>
          <Typography variant="h6">$2,784</Typography>
        </Grid>
      </Grid>
      <Grid item xs={3} display="flex" flexDirection="column" gap={2}>
        <Grid display="flex" gap={1}>
          <CheckCircleOutlineIcon
            sx={{
              color: "white",
              background: "green",
              borderRadius: "50%",
            }}
          />
          <Typography variant="body2">
            Your order qualifies for FREE Shipping. Choose this option at
            checkout. See details
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="h6">Subtotal (6 items): $2,970.75</Typography>
          <Grid display="flex" alignItems="center">
            <Checkbox sx={{ p: 0 }} />
            <Typography>This order contains a gift</Typography>
          </Grid>
        </Grid>
        <Link to="/checkout">
          <Button className="cartBtn" sx={styles.btn} variant="contained" fullWidth>
            Proceed to checkout
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
