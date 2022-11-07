import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderBottom: "1px solid lightgrey",
    marginBottom: 2,
  },
  nolink: {
    textDecoration: "none",
    color: "blue",
  },
};

const SignInBtn = () => {
  return (
    <Grid container sx={styles.flex}>
      <Grid item>
        <Typography textAlign="center">
          See personalized recommendations
        </Typography>
        <Link to="/signin" style={styles.nolink}>
          <Button variant="contained" color="secondary" style={{ width: 300 }}>
            Sign in
          </Button>
        </Link>
        <Typography variant="body2" textAlign="center">
          New customer?{" "}
          <Link to="/signup" style={styles.nolink}>
            Start here
          </Link>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignInBtn;
