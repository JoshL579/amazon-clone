import {
  FormControl,
  MenuItem,
  Grid,
  Paper,
  Select,
  Typography,
  Rating,
} from "@mui/material";
import React from "react";
import SearchTopBar from "./components/SearchTopBar";

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  width: {
    width: "100%",
  },
};

const Search = () => {
  return (
    <Grid container>
      <SearchTopBar />;
      <Grid container item xs={3}>
        <Grid item>
          <Typography variant="h6">Customer Reviews</Typography>
          <Grid item display="flex">
            <Rating name="read-only" value={4} readOnly />
            <Typography> & up</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={9}>
        <Typography>RESULTS</Typography>
        <Grid item display="flex">
          <img src="https://via.placeholder.com/200x200.png"></img>
          <Grid item>
            <Typography>
              HEYSONG Portable Bluetooth Speaker, Waterproof Wireless Outdoor
              Speakers with LED Light, Enhanced Bass, IPX7 Floating, 40H Play,
              TF Card, True Wireless Stereo for Party, Shower, Biking, Gifts for
              Men
            </Typography>
            <Grid display="flex" alignItems="center">
              <Rating
                name="read-only"
                value={4.5}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={1.5}>
                {45618}
              </Typography>
            </Grid>
            <Typography variant="h4">$25.99</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
