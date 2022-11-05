import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { theme } from "../../../theme/theme";
import { Link } from "react-router-dom";
import { calculateTotals } from "../../../store/cartReducer";

const SingleSideBar = ({ drawer, setDrawer }) => {
  const { cartItems, cartTotalQuantity, cartTotalPrice } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (cartItems.length === 0) return <></>;

  return (
    <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
      <Box width="50vw">
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
            gap={1}
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
              src={`/images/${cartItems[cartItems.length - 1].thumbnail}`}
              style={{ width: 50, height: 50, objectFit: "contain" }}
            ></img>
          </Grid>
          <Grid item display="flex" flexDirection="column" gap={1}>
            <Grid item display="flex" gap={1}>
              <Typography variant="h6">
                Cart subtotal({cartTotalQuantity} items):
              </Typography>
              <Typography fontWeight={700} color={theme.palette.orange.main}>
                $ {cartTotalPrice.toLocaleString()}
              </Typography>
            </Grid>
            <Grid item display="flex" gap={2}>
              <Link to="/cart">
                <Button
                  sx={{ background: "white", color: "black" }}
                  variant="contained"
                  className="singleBtn"
                >
                  Cart
                </Button>
              </Link>
              <Link to="/checkout">
                <Button
                  sx={{
                    background: theme.palette.secondary.light,
                    color: "black",
                  }}
                  variant="contained"
                  className="cartBtn"
                >
                  Proceed to checkout ({cartTotalQuantity} items)
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ background: "#e7e7e7", height: "80vh" }}></Grid>
      </Box>
    </Drawer>
  );
};

export default SingleSideBar;
