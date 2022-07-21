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
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartReducer";
import SingleSelect from "./components/SingleSelect";
import SingleModal from "./components/SingleModal";

const styles = {
  container: {
    p: 8,
    mt: 3,
    // mr: "auto",
    // ml: "auto",
    maxWidth: 1440,
  },
  containerBorder: {
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
  };

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
        // console.log(res.product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // const handleChange = (event) => {
  //   setQuantity(event.target.value);
  // };

  if (loading) return <></>;

  return (
    <>
      <SingleSideBar drawer={isDrawerOpen} setDrawer={setIsDrawerOpen} />
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        // spacing={3}
        sx={styles.container}
        direction="row"
      >
        <Grid item xs={3}>
          <SingleModal
            openModal={handleOpen}
            closeModal={handleClose}
            open={open}
            product={product}
          />
          <Button onClick={handleOpen}>
            <img
              src={`/images/${product.thumbnail}`}
              style={{
                maxWidth: "100%",
                objectFit: "contain",
                minWidth: 300,
                maxHeight: 380,
              }}
            ></img>
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">{product.title}</Typography>
          <Grid display="flex" alignItems="center" gap={1}>
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.5}
              size="medium"
            />
            <Typography>260 Ratings</Typography>
          </Grid>
          <Divider sx={styles.divider} />
          <Grid>
            <Typography sx={{ mb: 2 }} variant="h5" fontWeight={700}>
              ${product.price}
            </Typography>
            <Grid display="flex" gap={6}>
              <Typography variant="h6">Brand</Typography>
              <Typography>Odaban</Typography>
            </Grid>
            <Grid display="flex" gap={6}>
              <Typography variant="h6">Color</Typography>
              <Typography>Pink</Typography>
            </Grid>
            <Grid display="flex" gap={6}>
              <Typography variant="h6">Noise Control</Typography>
              <Typography>Sound isolation</Typography>
            </Grid>
            <Grid display="flex" gap={6}>
              <Typography variant="h6">Connectivity</Typography>
              <Typography sx={{ mb: 2 }}>Wired</Typography>
            </Grid>
          </Grid>
          <Divider sx={styles.divider} />
          <Typography variant="h6">About this item</Typography>
          <Typography>{product.briefly}</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={[styles.containerBorder, { p: 2, height: "60vh" }]}
        >
          <Grid display="flex" flexDirection="column" gap={1}>
            <Typography fontWeight={700} variant="h5">
              $29.99
            </Typography>
            <Typography>Delivery Tuesday, July 26</Typography>
            <Typography>Deliver to Canada</Typography>
            <Typography variant="h5" color="green">
              In Stock
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <SingleSelect />
              {/* <Select
                value={quantity}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" sx={{ p: 0 }}>
                  1
                </MenuItem>
              </Select> */}
            </FormControl>
            <Button
              sx={styles.btn.cart}
              variant="outlined"
              onClick={() => {
                setIsDrawerOpen(true);
                handleAddToCard(product);
              }}
            >
              Add to Cart
            </Button>
            <Button sx={styles.btn.buy} variant="outlined">
              Buy now
            </Button>
            <Typography>Ship from Amazon</Typography>
            <Typography>Sold by Lucky Product</Typography>
            <Divider />
            <Button
              variant="contained"
              sx={[
                {
                  background: theme.palette.grey.header,
                  color: "black",
                  border: "1px solid lightgrey",
                },
              ]}
              className="checkoutBtn"
            >
              Add to list
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleProduct;
