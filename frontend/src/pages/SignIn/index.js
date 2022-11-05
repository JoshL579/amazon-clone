import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { login, signup } from "../../api/endpoints/auth";

const paperStyle = {
  signin: {
    padding: 20,
    height: "33vh",
    width: 300,
    margin: "20px auto",
  },
  signup: {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  },
};

const SignIn = (props) => {
  const { page } = props;
  // signin state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorNoEmailSignIn, SetErrorNoEmailSignIn] = useState(false);
  const [errorNoPassSignIn, setErrorNoPassSignIn] = useState(false);

  // signup state
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [errorNoEmail, setErrorNoEmail] = useState(false);
  const [errorNoName, setErrorNoName] = useState(false);
  const [errorNoPass, setErrorNoPass] = useState(false);

  // signin and signup redirect
  let navigate = useNavigate();

  // signin and signup validation
  const isValidEmail = (emailAddress) => {
    return /\S+@\S+\.\S+/.test(emailAddress);
  };

  const handleSubmitSignin = () => {
    if (step === 1 && email && isValidEmail(email)) {
      setStep(2);
      return;
    }

    if (!email || !isValidEmail(email)) {
      SetErrorNoEmailSignIn(true);
      return;
    }

    if (!password) {
      setErrorNoPassSignIn(true);
      return;
    }

    login({ email: email, password: password })
      .then((res) => {
        if (res.success) {
          navigate("/");
        }
        alert("something wrong");

        // redirect
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  const handleSubmitSignup = () => {
    if (passwordSignUp !== passwordConfirm) {
      alert("wrong password");
      return;
    }
    if (!name) {
      setErrorNoName(true);
      return;
    }

    if (!emailSignUp || !isValidEmail(emailSignUp)) {
      setErrorNoEmail(true);
      return;
    }
    if (!passwordSignUp || passwordSignUp.length < 6) {
      setErrorNoPass(true);
      return;
    }

    signup({ email: emailSignUp, password: passwordSignUp, name: name })
      .then((res) => {
        if (res.success) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  return (
    <Grid sx={{ mt: "3rem" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={logo} style={{ width: 120 }}></img>
      </Box>
      {page === "signin" ? (
        <Grid>
          <Paper elevation={3} style={paperStyle.signin}>
            <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
              Sign In
            </Typography>
            <Typography variant="h7" sx={{ fontWeight: 700 }}>
              Email of mobile phone number
            </Typography>
            {step === 1 ? (
              <TextField
                size="small"
                color="warning"
                fullWidth
                required
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{ marginBottom: 1 }}
                autoFocus
                error={errorNoEmailSignIn ? true : false}
                helperText={
                  errorNoEmailSignIn
                    ? "!  Enter your email or mobile phone number"
                    : ""
                }
              ></TextField>
            ) : (
              <TextField
                size="small"
                color="warning"
                fullWidth
                required
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                sx={{ marginBottom: 1 }}
                autoFocus
                error={errorNoPassSignIn ? true : false}
                helperText={errorNoPassSignIn ? "!  Enter your password" : ""}
              ></TextField>
            )}
            <Button
              sx={{ marginBottom: 3, fontSize: 11 }}
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleSubmitSignin}
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
                sx={{ width: 340, padding: 1, fontSize: 11 }}
              >
                Create Your Amazon account
              </Button>
            </Link>
          </Box>
        </Grid>
      ) : (
        <Paper elevation={3} style={paperStyle.signup}>
          <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
            Create account
          </Typography>
          <Typography variant="h7" sx={{ fontWeight: 700 }}>
            Your name
          </Typography>
          <TextField
            fullWidth
            required
            sx={{ marginBottom: 2 }}
            placeholder="First and last name"
            size="small"
            color="warning"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            autoFocus
            error={errorNoName ? true : false}
            helperText={errorNoName ? "!  enter your name" : ""}
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
            value={emailSignUp}
            onChange={(e) => {
              setEmailSignUp(e.target.value);
            }}
            error={errorNoEmail ? true : false}
            helperText={
              errorNoEmail ? "!  Enter your email or mobile phone number" : ""
            }
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
            value={passwordSignUp}
            onChange={(e) => {
              setPasswordSignUp(e.target.value);
            }}
            error={errorNoPass ? true : false}
            helperText={errorNoPass ? "!  Minimum 6 characters required" : ""}
          ></TextField>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            {/* <PriorityHighIcon color="blue" fontSize="10px" />
            <Typography variant="body2">
              Passwords must be at least 6 characters.
            </Typography> */}
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
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          ></TextField>

          <Button
            sx={{ padding: 1, marginBottom: 3, fontSize: 11 }}
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmitSignup}
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
      )}

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
