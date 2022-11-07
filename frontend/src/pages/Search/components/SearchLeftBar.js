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
    <Grid item xs={2} display="flex" flexDirection="column">
      <Grid sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Customer Reviews
        </Typography>
        <Grid display="flex" flexDirection="column">
          {ratings.map((rating, index) => {
            return (
              <Grid display="flex" key={index}>
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

      <Grid>
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
