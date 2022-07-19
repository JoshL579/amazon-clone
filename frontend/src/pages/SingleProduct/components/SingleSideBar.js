import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { theme } from "../../../theme/theme";

const SingleSideBar = ({ drawer, setDrawer }) => {
  const { cartItems } = useSelector((store) => store.cart);
  const cartArr = cartItems[0];
  //   console.log(cartArr);

  return (
    <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
      <Box width="50vw" sx={{ background: "#e7e7e7" }}>
        <Grid
          height="20vh"
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <Grid display="flex" gap={1}>
              <CheckCircleOutlineIcon
                sx={{
                  color: "white",
                  background: "green",
                  borderRadius: "50%",
                }}
              />
              <Typography variant="h6">Added to Cart</Typography>
            </Grid>
            <img
              src="https://via.placeholder.com/50x50.png"
              style={{ width: 50 }}
            ></img>
          </Grid>
          <Grid item display="flex" flexDirection="column" gap={1}>
            <Grid item display="flex" gap={1}>
              <Typography variant="h6">Cart subtotal(4 items):</Typography>
              <Typography fontWeight={700} color={theme.palette.orange.main}>
                $145.56
              </Typography>
            </Grid>
            <Grid item display="flex" gap={2}>
              <Button
                sx={{ background: "white", color: "black" }}
                variant="contained"
                className="singleBtn"
              >
                Cart
              </Button>
              <Button
                sx={{
                  background: theme.palette.secondary.light,
                  color: "black",
                }}
                variant="contained"
                className="singleBtn"
              >
                Proceed to checkout (4 items)
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default SingleSideBar;
