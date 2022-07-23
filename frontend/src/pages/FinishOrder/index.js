import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Amzmusic from "../../assets/img/FinishOrder/amazon_music.jpg";
import { theme } from "../../theme/theme";
import { useSelector } from "react-redux";

const styles = {
  border: {
    borderBottom: "1px solid lightgrey",
  },
};

const FinishOrder = () => {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);

  return (
    <Grid
      container
      sx={{ p: 5, mt: 2 }}
      display="flex"
      justifyContent="space-between"
    >
      <Grid item xs={6}>
        <Grid item sx={[styles.border, { pb: 2 }]}>
          <Typography
            variant="h5"
            color="green"
            fontWeight={900}
            sx={{ mb: 2 }}
          >
            Thank you, your order has been placed.
          </Typography>
          <Typography>
            Please check your email for order confirmation and detailed delivery
            information or visit Message Center to review your notifications.
          </Typography>
          <Grid display="flex" gap={1}>
            <Typography variant="h6" fontWeight={900} color="green">
              New!
            </Typography>
            <Typography>
              Get shipment notifications on your mobile device with the free
              Amazon app
            </Typography>
          </Grid>
          <Grid item display="flex" gap={1}>
            <Typography variant="h6">Shipping to Sheila J. Ross,</Typography>
            <Typography>2724 Reeves Street Milwaukee, WI 53202</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          display="flex"
          justifyContent="space-between"
          sx={{ pt: 2 }}
        >
          <Grid item>
            <Typography variant="h6" fontWeight={900} color="green">
              Sunday, Nov. 8
            </Typography>
            <Typography>Estimated delivery</Typography>
          </Grid>
          {cartItems.map((item) => {
            return (
              <Grid item display="flex">
                <img
                  style={{ width: 50 }}
                  src={`/images/${item.thumbnail}`}
                ></img>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={5.5} display="flex" flexDirection="column" sx={{ p: 2 }}>
        <Grid item display="flex" alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <img style={{ width: 230 }} src={Amzmusic}></img>
          </Grid>
          <Grid
            item
            xs={6}
            textAlign="center"
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Typography>
              Get Unlimited access to 70 million songs, ad free.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={[
                {
                  background: theme.palette.grey.header,
                  color: "black",
                  border: "1px solid lightgrey",
                },
              ]}
              className="checkoutBtn"
            >
              Try Now
            </Button>
            <Typography>
              $7.99/month after 30-day trial. Cancel anytime.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>
            By clicking "try now", you agree to the Terms of Use and authorize
            us to change your default card on file, $7.99 per month plus any
            taxes after your 30-day trial. Your subscription continues until
            cancelled.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinishOrder;
