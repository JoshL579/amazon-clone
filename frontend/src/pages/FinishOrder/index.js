import { Grid, Typography } from "@mui/material";
import React from "react";

const styles = {
  border: {
    borderBottom: "1px solid lightgrey",
  },
};

const FinishOrder = () => {
  return (
    <Grid container sx={{ p: 3 }}>
      <Grid container item xs={6}>
        <Grid item sx={[styles.border, { pb: 2 }]}>
          <Typography>Thank you, your order has been placed.</Typography>
          <Typography>
            Please check your email for order confirmation and detailed delivery
            information or visit MEssage Center to review your notifications.
          </Typography>
          <Typography>New!</Typography>
          <Typography>
            Get shipment notifications on your mobile device with the free
            Amazon app
          </Typography>
          <Typography>
            Shipping to Sheila J. Ross, 2724 Reeves Street Milwaukee, WI 53202
            Phone: 920-820-5243
          </Typography>
        </Grid>
        <Grid
          container
          item
          display="flex"
          justifyContent="space-between"
          sx={{ pt: 2 }}
        >
          <Grid item>
            <Typography>Sunday, Nov. 8</Typography>
            <Typography>Estimated delivery</Typography>
          </Grid>
          <Grid item display="flex" gap={2}>
            <img src="https://via.placeholder.com/50x70.png"></img>
            <img src="https://via.placeholder.com/50x70.png"></img>
            <img src="https://via.placeholder.com/50x70.png"></img>
            <img src="https://via.placeholder.com/50x70.png"></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item></Grid>
    </Grid>
  );
};

export default FinishOrder;
