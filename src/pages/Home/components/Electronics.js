import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import electronics from "../../../data/electronics.json";

const styles = {
  p: {
    padding: 2,
  },
};

export default function Electronics() {
  return (
    <Grid container spacing={3} sx={styles.p}>
      {electronics.map((category) => {
        const { image, note, title } = category;
        return (
          <Grid item xs={3}>
            <Paper elevation={2}>
              <Typography variant="h6" fontWeight={700}>
                {title}
              </Typography>
              <Link to="/">
                <img src={image} className="img" />
              </Link>
              <Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                  {note}
                </Link>
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}
