import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const sidebarData = [
  {
    title: "Digital Content & Devices",
    subTitle: [
      "Amazon Music",
      "Kindle E-readers & Books",
      "Appstore for Android",
    ],
  },
  {
    title: "Shop By Department",
    subTitle: [
      "Electronics",
      "Computers",
      "Smart Home",
      "Arts & Crafts",
      "See All",
    ],
  },
  {
    title: "Programs & Features",
    subTitle: [
      "Gift Cards",
      "#FoundItOnAmazon",
      "Amazon Live",
      "International Shopping",
      "See All",
    ],
  },
  {
    title: "Help & Settings",
    subTitle: [
      "Your Account",
      "English",
      "United States",
      "Customer Service",
      "Sign In",
    ],
  },
];

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
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              p={2}
              width="300px"
              role="presentation"
              sx={{ backgroundColor: theme.palette.primary.light }}
            >
              <Box sx={styles.flex}>
                <Avatar sx={styles.avatar} />
                <Typography fontWeight={700} color="white" variant="h6">
                  Hello, Sign in
                </Typography>
              </Box>
            </Box>
            <List>
              {sidebarData.map((list, index) => {
                const { title, subTitle } = list;
                return (
                  <Box key={index} sx={{ borderBottom: "1px solid #d5dbdb" }}>
                    <ListItem button>
                      <ListItemText primary={title}></ListItemText>
                    </ListItem>
                    {subTitle.map((sub, index2) => {
                      return (
                        <ListItem button key={index2} sx={styles.flex}>
                          <ListItemText secondary={sub}></ListItemText>
                          <ChevronRightIcon />
                        </ListItem>
                      );
                    })}
                  </Box>
                );
              })}
            </List>
          </Drawer>
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
