import React from "react";
import logo from "../../assets/img/SignIn/amazon-logo.png";
import {
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  Box,
  Paper,
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const paperStyle = {
  padding: 20,
  height: "45vh",
  width: 450,
  margin: "20px auto",
};

const SignIn = () => {
  return (
    <Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo}></img>
      </Box>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Sign In
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Email of mobile phone number
        </Typography>
        <TextField fullWidth required sx={{ marginBottom: 2 }}></TextField>
        <Button
          sx={{ padding: 1.5, marginBottom: 5 }}
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Continue
        </Button>
        <Typography sx={{ marginBottom: 3 }}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowRightIcon />
          <Typography>Need help?</Typography>
        </Box>
      </Paper>
      <Button type="submit" variant="contained" color="grey">
        Create Your Amazon account
      </Button>
      <BottomNavigation showLabels>
        <BottomNavigationAction label=" Conditions of Use " />
        <BottomNavigationAction label=" Privacy Notice " />
        <BottomNavigationAction label=" Help " />
      </BottomNavigation>
      <Typography align="center">© 1996-2022, Amazon.com, Inc. or its affiliates</Typography>
    </Grid>
  );
};

export default SignIn;
