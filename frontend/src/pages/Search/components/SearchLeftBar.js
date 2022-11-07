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
  InputAdornment,
} from "@mui/material";

const SearchLeftBar = () => {
  return (
    <Grid
      container
      item
      xs={3}
      display="flex"
      flexDirection="column"
      spacing={2}
    >
      <Grid item>
        <Typography variant="subtitle1" fontWeight="bold">
          Customer Reviews
        </Typography>
        <Grid item display="flex" flexDirection="column">
          {ratings.map((rating, index) => {
            return (
              <Grid item display="flex" key={index}>
                <Rating
                  size="medium"
                  name="read-only"
                  value={rating.value}
                  readOnly
                />
                <Typography variant="body2"> & up</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* <Grid item>
        <Typography variant="subtitle1">Brand</Typography>
        <FormGroup>
          {brands.map((brand, index) => {
            return (
              <FormControlLabel
                control={<Checkbox sx={{ paddingBottom: 0, paddingTop: 0 }} />}
                label={brand.brand}
                key={index}
              />
            );
          })}
        </FormGroup>
      </Grid> */}
      <Grid item>
        <Typography variant="subtitle1" fontWeight="bold">
          Price
        </Typography>
        {prices.map((price, index) => {
          return (
            <Typography variant="body2" key={index}>
              {price.price}
            </Typography>
          );
        })}
        {/* <Grid item display="flex" alignItems="center">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            placeholder="MIN"
            sx={{ width: "5rem", "& input": { padding: 0 } }}
          ></TextField>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            placeholder="MAX"
            sx={{ width: "5rem", "& input": { padding: 0 } }}
          ></TextField>
          <Button variant="outlined" sx={{ padding: 0 }}>
            Go
          </Button>
        </Grid> */}
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

// const brands = [
//   {
//     id: 1,
//     brand: "Acer",
//   },
//   {
//     id: 2,
//     brand: "LG",
//   },
//   {
//     id: 3,
//     brand: "SAMSUNG",
//   },
//   {
//     id: 4,
//     brand: "ASUS",
//   },
// ];

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
