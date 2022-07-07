import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Categories from "../../components/Home/Categories";
import categories from "../../data/data.json";

const styles = {
    p: {
        padding: 2
    }
}

export default function Home() {
  return (
    <Categories />
  );
}
