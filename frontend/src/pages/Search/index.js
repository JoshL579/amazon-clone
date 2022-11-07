import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchLeftBar from "./components/SearchLeftBar";
import SearchRightBar from "./components/SearchRightBar";
import SearchTopBar from "./components/SearchTopBar";
import History from "../Home/components/History";
import SignInBtn from "../Home/components/SignInBtn";
import BtnGroup from "./components/BtnGroup";
import BackToTop from "./components/BackToTop";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResult } from "../../store/keywordReducer";
import { useSearchParams } from "react-router-dom";

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

const Search = (props) => {
  const dispatch = useDispatch();
  const { searchProducts } = useSelector((store) => store.keyword);
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keywords");

  // console.log(searchParams);

  useEffect(() => {
    dispatch(fetchSearchResult(keywords));
  }, []);

  return (
    <>
      <SearchTopBar products={searchProducts} keywords={keywords} />
      <Grid container sx={styles.container}>
        <Grid display="flex" justifyContent="center" sx={{ width: "100%" }}>
          <SearchLeftBar />
          <SearchRightBar products={searchProducts} />
        </Grid>
        <BtnGroup />
        {/* <History /> */}
        <SignInBtn />
        <BackToTop />
      </Grid>
    </>
  );
};

export default Search;
