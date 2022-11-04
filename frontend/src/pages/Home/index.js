import { Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import TopSlider from "./components/TopSlider";
import History from "./components/History";
import SignInBtn from "./components/SignInBtn";
import { HomeSwiper } from "./components/HomeSwiper";
import { getImages } from "../../api/endpoints/home";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

const styles = {
  root: {
    background: "#EAEDED",
  },
  container: {
    maxWidth: 1500,
    margin: "auto",
  },
  headerbar: {
    backgroundColor: theme.palette.grey.header,
    width: "100%",
    textAlign: "center",
    margin: 1,
    p: 1.5,
  },
  // link: {
  //   color: "#007185",
  //   '&:hover': {
  //     color: "orange",
  //     textDecoration: "underline",
  //   },
  // },
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState({});

  useEffect(() => {
    getImages(2)
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
        <Paper elevation={0} sx={styles.headerbar}>
          <Typography fontWeight={700}>
            You are on amazon.com. You can also shop on Amazon Canada for
            millions of products with fast local delivery.{" "}
            <Link className="global-link" to="https://www.amazon.ca/">
              Click here to go to amazon.ca
            </Link>
          </Typography>
        </Paper>
        <Categories images={images.cards.filter((_, i) => i < 8)} />
        <HomeSwiper type={images.categories[7]} images={images.products[7]} />
        <Categories images={images.cards.filter((_, i) => i >= 8 && i < 12)} />
        {[5, 1, 3].map((category) => (
          <HomeSwiper
            type={images.categories[category]}
            images={images.products[category]}
            key={`section-${category}`}
          />
        ))}
        <History images={images.history} />
        <SignInBtn />
      </Grid>
    </Grid>
  );
}
