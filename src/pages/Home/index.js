import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Categories from "./components/Categories";
import TopSlider from "./components/TopSlider";

const styles = {
  p: {
    padding: 2,
  },
};

export default function Home() {
  return (
    <div>
      <TopSlider />
      <Categories />
    </div>
  );
}
