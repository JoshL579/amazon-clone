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
import SearchLeftBar from "./components/SearchLeftBar";
import SearchRightBar from "./components/SearchRightBar";
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
  container: {
    p: 2,
  },
};

const Search = () => {
  return (
    <>
      <SearchTopBar />
      <Grid container sx={styles.container}>
        <SearchLeftBar />
        <SearchRightBar />
      </Grid>
    </>
  );
};

export default Search;
