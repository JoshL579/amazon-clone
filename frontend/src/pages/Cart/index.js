import { Grid, Typography, Button, Checkbox, Divider } from "@mui/material";
import React, { useEffect } from "react";
import CartSelect from "./CartSelect";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { theme } from "../../theme/theme";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartEmpty from "./CartEmpty";
import { getProductDetail } from "../../api/endpoints/detail";
import { removeFromCart } from "../../store/cartReducer";

const styles = {
  btn: {
    background: theme.palette.secondary.light,
    color: "black",
  },
  border: {
    borderTop: "1px solid lightgrey",
    // "&:last-child": {
    //   borderBottom: "1px solid lightgrey",
    //   pb: 2,
    // },
  },
};

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity, cartTotalPrice } = useSelector(
    (store) => store.cart
  );

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

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
        {cartItems.map((item) => {
          return (
            <Grid
              item
              display="flex"
              justifyContent="space-around"
              gap={5}
              sx={[styles.border, { pl: 0, pt: 2 }]}
              key={item.id}
            >
              <Grid item xs={2}>
                <img
                  style={{ width: 150, height: 175, objectFit: "contain" }}
                  src={`/images/${item.thumbnail}`}
                ></img>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{item.title}</Typography>
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
                  <Button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    variant="body2"
                  >
                    Delete
                  </Button>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Typography variant="body2">Save for Later</Typography>
                </Grid>
              </Grid>
              <Grid>
                <Typography variant="h6">
                  {(item.price * item.cartQuantity).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
        <Grid>
          <Typography variant="h6" sx={styles.border} textAlign="end">
            Subtotal ({cartTotalQuantity} item): ${cartTotalPrice.toFixed(2)}
          </Typography>
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
          <Typography variant="h6">
            Subtotal ({cartTotalQuantity} item):
            {` $${cartTotalPrice.toFixed(2)}`}
          </Typography>
          <Grid display="flex" alignItems="center">
            <Checkbox sx={{ p: 0 }} />
            <Typography>This order contains a gift</Typography>
          </Grid>
        </Grid>
        <Link to="/checkout">
          <Button
            className="cartBtn"
            sx={styles.btn}
            variant="contained"
            fullWidth
          >
            Proceed to checkout
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
