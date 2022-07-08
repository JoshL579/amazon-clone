import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const styles = {
    Typography: {
      mr: 2,
      fontSize: 16,
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    flex: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    avatar: {
      backgroundColor: theme.palette.grey.main,
      color: theme.palette.primary.light,
      width: 25,
      height: 25,
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
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
            <Typography variant="h6">All</Typography>
          </IconButton>
          <Sidebar
            isDrawerOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
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
