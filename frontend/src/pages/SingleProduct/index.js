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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { theme } from "../../theme/theme";
import { getProductDetail } from "../../api/endpoints/detail";
import SingleSideBar from "./components/SingleSideBar";

const styles = {
  container: {
    p: 2,
    mt: 5,
    mr: "auto",
    ml: "auto",
    maxWidth: 1440,
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
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // 1. check cookie "HISTORY" exist
    // 1.1 if not exist, add new cookie: {HISOTRY: []}
    // 1.2 if exist, get existing array from cookie
    // 2. push id into array
    // 3. setCookie

    // update backend history
    getProductDetail(id, 2)
      .then((res) => {
        setProduct(res.product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  if (loading) return <></>;

  return (
    <>
      <SingleSideBar drawer={isDrawerOpen} setDrawer={setIsDrawerOpen} />
      <Grid
        container
        display="flex"
        justifyContent="center"
        spacing={3}
        sx={styles.container}
        direction="row"
      >
        <Grid item xs={5.3} align="center">
          <img
            src={`/images/${product.thumbnail}`}
            style={{ maxWidth: "100%", objectFit: "contain", minWidth: 300 }}
          ></img>
        </Grid>
        <Grid item xs={4.7} p={2}>
          <Typography variant="h5">{product.title}</Typography>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            precision={0.5}
            size="small"
          />
          <Divider sx={styles.divider} />
          <Typography variant="h5">${product.price}</Typography>
          <Divider sx={styles.divider} />
          <Typography variant="h6">About this item</Typography>
          <Typography>{product.briefly}</Typography>
        </Grid>
        <Grid item xs={2} sx={styles.containerBorder}>
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
          <Button
            sx={styles.btn.cart}
            variant="outlined"
            onClick={() => setIsDrawerOpen(true)}
          >
            Add to Cart
          </Button>
          <Button sx={styles.btn.buy} variant="outlined">
            Buy now
          </Button>
          <Typography>Ship from Amazon</Typography>
          <Typography>Sold by Lucky Product</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleProduct;
