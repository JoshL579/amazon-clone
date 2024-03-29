import React from "react";
import {
  FormControl,
  MenuItem,
  Grid,
  Paper,
  Select,
  Typography,
} from "@mui/material";

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

const SearchTopBar = ({ products, keywords }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid item sx={styles.width}>
      <Paper sx={(styles.flex, { p: "0.5rem" })} elevation={2}>
        <Typography>
          1-20 of {products.length} results for {keywords}
        </Typography>
        {/* <FormControl sx={{ minWidth: 120 }}>
          <Select
            displayEmpty
            onChange={handleChange}
            value={age}
            inputProps={{ "aria-label": "Without label" }}
            sx={{ borderRadius: 15 }}
          >
            <MenuItem value="">
              <em>Sort by: Featured</em>
            </MenuItem>
            <MenuItem value={10}>Sort by:Price: Low to High</MenuItem>
            <MenuItem value={10}>Sort by:Price: High to Low</MenuItem>
            <MenuItem value={10}>Sort by:Avg. Customer Review</MenuItem>
            <MenuItem value={10}>Newest Arrivals</MenuItem>
          </Select>
        </FormControl> */}
      </Paper>
    </Grid>
  );
};

export default SearchTopBar;
