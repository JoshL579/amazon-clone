import React from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { theme } from "../../theme/theme";
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

const styles = {
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

const Sidebar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
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
  );
};

export default Sidebar;
