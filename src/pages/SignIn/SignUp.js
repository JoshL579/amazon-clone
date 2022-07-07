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
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Link } from "react-router-dom";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 300,
  margin: "20px auto",
};

const SignUp = () => {
  return (
    <Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} style={{ width: 120 }}></img>
      </Box>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Create account
        </Typography>
        <Typography
          variant="h7"
          inputProps={{ sx: { height: 100 } }}
          sx={{ fontWeight: 700 }}
        >
          Your name
        </Typography>
        <TextField
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          placeholder="First and last name"
          size="small"
          color="warning"
        ></TextField>
        <Typography variant="h7" sx={{ fontWeight: 700 }}>
          Mobile number or email
        </Typography>
        <TextField
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          size="small"
          color="warning"
        ></TextField>
        <Typography variant="h7" sx={{ fontWeight: 700 }}>
          Password
        </Typography>

        <TextField
          fullWidth
          required
          size="small"
          placeholder="At least 6 characters"
          color="warning"
        ></TextField>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <PriorityHighIcon color="blue" fontSize="10px" />
          <Typography variant="body2">
            Passwords must be at least 6 characters.
          </Typography>
        </Box>
        <Typography variant="h7" sx={{ fontWeight: 700 }}>
          Re-enter password
        </Typography>
        <TextField
          fullWidth
          required
          sx={{ marginBottom: 2 }}
          size="small"
          color="warning"
        ></TextField>

        <Button
          sx={{ padding: 1, marginBottom: 3, fontSize: 11 }}
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

        <Typography variant="body2">
          Already have an account? <Link to="/signin">Sign-In</Link>
        </Typography>
        <Typography variant="body2">
          Buying for work?{" "}
          <Link to="/business">Create a free business account</Link>
        </Typography>
      </Paper>

      <BottomNavigation showLabels>
        <BottomNavigationAction label=" Conditions of Use " />
        <BottomNavigationAction label=" Privacy Notice " />
        <BottomNavigationAction label=" Help " />
      </BottomNavigation>
      <Typography align="center">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </Typography>
    </Grid>
  );
};

export default SignUp;
