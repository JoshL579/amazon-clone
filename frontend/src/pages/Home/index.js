import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import Electronics from "./components/Electronics";
import TopSlider from "./components/TopSlider";
import Game from "./components/Game";
import History from "./components/History";
import SignInBtn from "./components/SignInBtn";
import { HomeSwiper } from "./components/HomeSwiper";
import { getImages } from "../../api/endpoints/home";

const styles = {
  root: {
    background: "#EAEDED",
  },
  container: {
    maxWidth: 1500,
    margin: "auto",
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});
  useEffect(() => {
    getImages()
      .then((res) => {
        setImages(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <></>;

  return (
    <Grid container sx={styles.root}>
      <Grid item container sx={styles.container}>
        <TopSlider images={images.heros} />
        <Categories images={images.cards.filter((_, i) => i < 8)} />
        <HomeSwiper
          type="Home"
          images={images.products.filter((product) => product.categoryId === 7)}
        />
        <Categories images={images.cards.filter((_, i) => i >= 8 && i < 12)} />
        <HomeSwiper
          type="Book"
          images={images.products.filter((product) => product.categoryId === 5)}
        />
        <HomeSwiper
          type="Toy"
          images={images.products.filter((product) => product.categoryId === 1)}
        />
        <HomeSwiper
          type="PC"
          images={images.products.filter((product) => product.categoryId === 3)}
        />
        {/* <Electronics /> */}
        {/* <HomeSwiper type="home"/>
        <HomeSwiper type="kitchen"/> */}
        {/* <Game /> */}
        {/* <HomeSwiper type="beauty"/>
        <HomeSwiper type="baby"/>
        <HomeSwiper type="repurchase"/> */}
        <History />
        <SignInBtn />
      </Grid>
    </Grid>
  );
}
