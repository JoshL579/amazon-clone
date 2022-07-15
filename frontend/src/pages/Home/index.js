import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import TopSlider from "./components/TopSlider";
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
          type={images.categories[7]}
          images={images.products[7]}
        />
        <Categories images={images.cards.filter((_, i) => i >= 8 && i < 12)} />
        {[5, 1, 3].map((category) =>
          <HomeSwiper
            type={images.categories[category]}
            images={images.products[category]}
            key={`section-${category}`}
          />
        )}
        <History />
        <SignInBtn />
      </Grid>
    </Grid>
  );
}
