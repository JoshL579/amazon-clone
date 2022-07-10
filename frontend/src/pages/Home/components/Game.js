import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import games from "../../../data/game.json";

const styles = {
  p: {
    padding: 2,
  },
};

export default function Game() {
  return (
    <Grid container spacing={3} sx={styles.p}>
      {games.map((game, i) => {
        const { image, note, title } = game;
        return (
          <Grid item xs={3} key={`game-${i}`}>
            <Paper elevation={2}>
              <Typography variant="h6" fontWeight={700}>
                {title}
              </Typography>
              <Link to="/">
                {typeof image === "string" ? (
                  <img src={image} className="img" />
                ) : (
                  <Grid container spacing={1}>
                    {image.map((img, i) => {
                      return (
                        <Grid item key={`game-inner-img-${i}`} xs={6}>
                          <img src={img}></img>
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
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
