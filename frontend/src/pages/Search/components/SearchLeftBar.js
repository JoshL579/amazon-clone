import React from "react";
import {
  Grid,
  Typography,
  Rating,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";

const SearchLeftBar = () => {
  return (
    <Grid container item xs={3} display="flex" flexDirection="column" spacing={2}>
      <Grid item>
        <Typography variant="h6">Customer Reviews</Typography>
        <Grid item display="flex" flexDirection="column">
          {ratings.map((rating) => {
            return (
              <Grid item display="flex">
                <Rating name="read-only" value={rating.value} readOnly />
                <Typography> & up</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Brand</Typography>
        <FormGroup>
          {brands.map((brand) => {
            return (
              <FormControlLabel
                control={<Checkbox sx={{ paddingBottom: 0, paddingTop: 0 }} />}
                label={brand.brand}
              />
            );
          })}
        </FormGroup>
      </Grid>
      <Grid item>
        <Typography variant="h6">Price</Typography>
        {prices.map((price) => {
          return <Typography>{price.price}</Typography>;
        })}
        <TextField placeholder="MIN" sx={{ width: "4rem" }}></TextField>
        <TextField placeholder="MAX" sx={{ width: "4rem" }}></TextField>
        <Button variant="outlined">Go</Button>
      </Grid>
    </Grid>
  );
};

const ratings = [
  {
    id: 1,
    value: 4,
  },
  {
    id: 2,
    value: 3,
  },
  {
    id: 3,
    value: 2,
  },
  {
    id: 4,
    value: 1,
  },
];

const brands = [
  {
    id: 1,
    brand: "Acer",
  },
  {
    id: 2,
    brand: "LG",
  },
  {
    id: 3,
    brand: "SAMSUNG",
  },
  {
    id: 4,
    brand: "ASUS",
  },
];

const prices = [
  {
    id: 1,
    price: "Under $25",
  },
  {
    id: 2,
    price: "$25 to $50",
  },
  {
    id: 3,
    price: "$50 to $100",
  },
  {
    id: 4,
    price: "$100 to $200",
  },
  {
    id: 5,
    price: "$200 & Above",
  },
];

export default SearchLeftBar;
