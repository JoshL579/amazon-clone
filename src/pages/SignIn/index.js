import React from "react";
import logo from "../../assets/img/SignIn/amazon-logo.png";
import {
  Button,
  Typography,
  TextField,
  Grid,
  Box,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

const paperStyle = {
  padding: 20,
  height: "33vh",
  width: 300,
  margin: "20px auto",
};

const SignIn = () => {
  return (
    <Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} style={{ width: 120 }}></img>
      </Box>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Sign In
        </Typography>
        <Typography variant="h7" sx={{ fontWeight: 700 }}>
          Email of mobile phone number
        </Typography>
        <TextField
          size="small"
          color="warning"
          fullWidth
          required
          sx={{ marginBottom: 1 }}
        ></TextField>
        <Button
          sx={{ marginBottom: 3, fontSize: 11 }}
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Continue
        </Button>
        <Typography variant="body2" sx={{ marginBottom: 3 }}>
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
          <Typography variant="body2">Need help?</Typography>
        </Box>
      </Paper>
      <Box textAlign="center">
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button
            type="submit"
            variant="contained"
            color="grey"
            sx={{ width: 340, padding:1, fontSize:11 }}
          >
            Create Your Amazon account
          </Button>
        </Link>
      </Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction label=" Conditions of Use " />
        <BottomNavigationAction label=" Privacy Notice " />
        <BottomNavigationAction label=" Help " />
      </BottomNavigation>
      <Typography align="center" fontSize={12}>
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </Typography>
    </Grid>
  );
};

export default SignIn;
