import {
  Button,
  Divider,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../theme/theme";
import visa from "../../assets/img/Checkout/3767696321552037059.svg";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  border: {
    border: " 1px solid lightgrey",
  },
};

const Checkout = () => {
  const { cartItems, cartTotalQuantity, cartTotalPrice } = useSelector(
    (store) => store.cart
  );

  const [total, setTotal] = useState((cartTotalPrice * 1.12).toLocaleString());

  return (
    <Grid container sx={{ pl: 10, pr: 10, mt: 5 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
        Review Your order
      </Typography>
      <Grid container item display="flex" justifyContent="space-between">
        <Grid item xs={8.5} display="flex" flexDirection="column" gap={1}>
          <Grid sx={[styles.flex, styles.border, { p: 2 }]}>
            <Grid item xs={3}>
              <Typography variant="h6">Shipping address</Typography>
              <Typography>Sheila J. Ross</Typography>
              <Typography>2724 Reeves Street Milwaukee, WI 53202</Typography>
              <Typography>Phone: 920-820-5243</Typography>
            </Grid>
            <Grid item display="flex" flexDirection="column" gap={1}>
              <Grid item>
                <Typography variant="h6">Payment Method</Typography>
                <Grid display="flex" gap={1}>
                  <img style={{ width: 40 }} src={visa}></img>
                  <Typography>ending in 4586</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6">Billing address</Typography>
                <Typography>Same as shipping address</Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid sx={styles.flex}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Add a gift card, promotion code, or voucher
                </Typography>
              </Grid>
              <Grid display="flex" alignItems="center">
                <TextField
                  sx={{ mr: 1 }}
                  placeholder="Enter Code"
                  inputProps={{
                    style: {
                      padding: 9,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={[
                    styles.border,
                    { background: theme.palette.grey.header, color: "black" },
                  ]}
                  className="checkoutBtn"
                >
                  Apply
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={[styles.border, { p: 3 }]}>
            <Typography
              variant="h5"
              sx={{ mb: 2, color: "green", fontWeight: 700 }}
            >
              Delivery: Aug. 4. 2022
            </Typography>
            {cartItems.map((item) => {
              return (
                <Grid
                  sx={[
                    styles.flex,
                    { borderBottom: "1px solid lightgrey", mb: 2 },
                  ]}
                  key={item.id}
                >
                  <Grid item xs={1}>
                    <img
                      style={{ width: 70 }}
                      src={`/images/${item.thumbnail}`}
                    ></img>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="h6" color={theme.palette.orange.main}>
                      $
                      {item.price
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      Quantity: {item.cartQuantity}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={[
                        styles.border,
                        {
                          background: theme.palette.grey.header,
                          color: "black",
                          p: 0.5,
                          mb: 3,
                        },
                      ]}
                      className="checkoutBtn"
                    >
                      <CardGiftcardIcon sx={{ mr: 1 }} />
                      Add gift options
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="h6">
                      Choose a delivery option:
                    </Typography>
                    <Grid display="flex">
                      <Radio sx={{ height: 24 }} />
                      <Grid display="flex" flexDirection="column">
                        <Typography variant="h6" color="green" fontWeight={700}>
                          Thursday, Aug 4
                        </Typography>
                        <Grid sx={styles.flex}>
                          <Typography sx={{ mr: 1 }}>FREE </Typography>
                          <Typography>Amazon Prime Free Shipping</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={3.4} sx={[styles.border, { p: 3 }]}>
          <Link to="/orderfinish">
            <Button
              variant="contained"
              fullWidth
              sx={[
                styles.border,
                { background: theme.palette.secondary.light, color: "black" },
              ]}
              className="cartBtn"
            >
              Place your order
            </Button>
          </Link>
          <Typography variant="body2" textAlign="center" sx={{ p: 1 }}>
            By placing your order, you agree to Amazon's privacy notice and
            conditions of use.
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{ mb: 1 }}>
            You also agree to AmazonGlobal's terms and conditions.
          </Typography>
          <Typography variant="h6">Order Summary</Typography>
          <Grid sx={styles.flex}>
            <Typography variant="body2">Items:</Typography>
            <Typography variant="body2">
              {cartTotalPrice.toLocaleString()}
            </Typography>
          </Grid>
          <Grid sx={styles.flex}>
            <Typography variant="body2">Shipping & handling:</Typography>
            <Typography variant="body2">0.00</Typography>
          </Grid>
          <Divider />
          <Grid sx={styles.flex}>
            <Typography variant="body2">Total before tax:</Typography>
            <Typography variant="body2">
              {cartTotalPrice.toLocaleString()}
            </Typography>
          </Grid>
          <Grid sx={styles.flex}>
            <Typography variant="body2">
              Estimated tax to be collected
            </Typography>
            <Typography variant="body2">
              {(cartTotalPrice * 0.12).toFixed(2).toLocaleString()}
            </Typography>
          </Grid>
          <Divider sx={{ mb: 2 }} />
          <Grid sx={[styles.flex, { mb: 1 }]}>
            <Typography variant="bodu1">Order total</Typography>
            <Typography variant="body1">
              {total}
              {/* {total.substring(0, total.length - 1)} */}
            </Typography>
          </Grid>
          <Grid sx={styles.flex}>
            <Typography variant="h6" color={theme.palette.orange.main}>
              Payment total
            </Typography>
            <Typography variant="h6" color={theme.palette.orange.main}>
              {total}
              {/* USD {total.substring(0, total.length - 1)} */}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Checkout;
