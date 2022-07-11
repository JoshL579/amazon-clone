import { Grid } from "@mui/material";
import React from "react";
import SearchLeftBar from "./components/SearchLeftBar";
import SearchRightBar from "./components/SearchRightBar";
import SearchTopBar from "./components/SearchTopBar";
import History from "../Home/components/History";
import SignInBtn from "../Home/components/SignInBtn";
import BtnGroup from "./components/BtnGroup";
import BackToTop from "./components/BackToTop";

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
        <BtnGroup />
        <History />
        <SignInBtn />
        <BackToTop />
      </Grid>
    </>
  );
};

export default Search;
