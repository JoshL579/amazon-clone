import {
  Grid,
  Rating,
  Typography,
  FormControl,
  MenuItem,
  Select,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme";

const styles = {
  container: {
    p: 2,
    mt: 5,
  },
  containerBorder: {
    p: 2,
    mt: 5,
    border: "1px solid lightgrey",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  divider: {
    mb: 3,
  },
  btn: {
    buy: {
      width: "100%",
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.main,
      p: 0,
      height: "2.5rem",
    },
    cart: {
      width: "100%",
      borderRadius: 15,
      backgroundColor: theme.palette.secondary.light,
      p: 0,
      height: "2.5rem",
    },
  },
};

const SingleProduct = () => {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      spacing={3}
      sx={styles.container}
    >
      <Grid cotainer item sx={6}>
        <img src="https://via.placeholder.com/650x350.png"></img>
      </Grid>
      <Grid cotainer item xs={4}>
        <Typography variant="h5">
          MagicPro Portable Garment Steamer for Clothes, Garments, Fabrics
          Removes Wrinkles for Fresh Clothing, Fast Heat and Auto Off, Handheld
          Travel Steamer with Detachable 300ml Water Tank
        </Typography>
        <Rating
          name="read-only"
          value={4.5}
          readOnly
          precision={0.5}
          size="small"
        />
        <Divider sx={styles.divider} />
        <Typography variant="h5">$29.99</Typography>
        <Divider sx={styles.divider} />
        <Typography variant="h6">About this item</Typography>
        <Typography>
          Handheld Wrinkle Remover – This portable garment steamer heats up in
          just 25 seconds and helps get wrinkles out of clothes and fabrics
          quickly for a fresh, crease-free look. This steamer will de-wrinkle
          and sanitize not only your clothes, but curtains and drapery,
          tablecloths, bedding, upholstery, toys, and much more.
        </Typography>
      </Grid>
      <Grid container item xs={2} sx={styles.containerBorder}>
        <Typography variant="h5">$29.99</Typography>
        <Typography>Delivery Tuesday, July 26</Typography>
        <Typography>Deliver to Canada</Typography>
        <Typography>In Stock</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={quantity}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" sx={{ p: 0 }}>
              1
            </MenuItem>
          </Select>
        </FormControl>
        <Button sx={styles.btn.cart} variant="outlined">
          Add to Cart
        </Button>
        <Button sx={styles.btn.buy} variant="outlined">
          Buy now
        </Button>
        <Typography>Ship from Amazon</Typography>
        <Typography>Sold by Lucky Product</Typography>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
