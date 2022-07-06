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
} from "@mui/material";

const SignIn = () => {
  return (
    <div>
      <Box component="img" src={logo}></Box>
      <Card style={{ maxWidth: 450, margin: "auto", padding: "20px 25px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sign-In
          </Typography>
          <Typography gutterBottom>Email of mobile phone number</Typography>
          <form>
            <Grid container>
              <Grid xs={12} item>
                <TextField variant="outlined" fullWidth></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  Submit
                </Button>
                <Typography gutterBottom>
                  By continuing, you agree to Amazon's Conditions of Use and
                  Privacy Notice.
                </Typography>
                <Typography gutterBottom>Need help?</Typography>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Button type="submit" variant="contained" color="grey" fullWidth>
        Create Your Amazon account
      </Button>
    </div>
  );
};

export default SignIn;
