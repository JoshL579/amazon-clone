import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Book from "./components/Book";
import Categories from "./components/Categories";
import Electronics from "./components/Electronics";
import Popular from "./components/Popular";
import TopSlider from "./components/TopSlider";
import InterTopSellerHome from "./components/InterTopSellerHome";
import InterTopSellerKitchen from "./components/InterTOpSellerKitchen";
import Game from "./components/Game";
import Beauty from "./components/Beauty";
import Baby from "./components/Baby";
import Repurchase from "./components/Repurchase";
import History from "./components/History";
import SignInBtn from "./components/SignInBtn";

export default function Home() {
  return (
    <div>
      <TopSlider />
      <Categories />
      <Popular />
      <Book />
      <Electronics />
      <InterTopSellerHome />
      <InterTopSellerKitchen />
      <Game />
      <Beauty />
      <Baby />
      <Repurchase />
      <History />
      <SignInBtn />
    </div>
  );
}
