import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

export default function Navbar() {
  const styles = {
    Typography: {
      mr: 2,
      fontSize: 16,
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.primary.light }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
            <Typography variant="h6">All</Typography>
          </IconButton>
          <Typography color="inherit" sx={styles.Typography}>
            <Link to="/deal" style={styles.link}>
              Today's Deals
            </Link>
          </Typography>
          <Typography color="inherit" sx={styles.Typography}>
            <Link to="/customer" style={styles.link}>
              Customer Service
            </Link>
          </Typography>
          <Typography color="inherit" sx={styles.Typography}>
            <Link to="/registry" style={styles.link}>
              Registry
            </Link>
          </Typography>
          <Typography color="inherit" sx={styles.Typography}>
            <Link to="/giftfcard" style={styles.link}>
              Gift Cards
            </Link>
          </Typography>
          <Typography color="inherit" sx={styles.Typography}>
            <Link to="/sell" style={styles.link}>
              Sell
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
