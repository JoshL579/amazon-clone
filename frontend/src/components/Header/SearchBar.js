import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../theme/theme";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiGetSearchResult } from "../../api/endpoints/search";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../../store/keywordReducer";

const styles = {
  root: {
    width: "100%",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: "calc(100% - 120px)",
    "& > div": {
      width: "100%",
      "&:hover": {
        border: "none",
      },
      "& > div": {
        borderRadius: 0,
      },
    },
  },
  dropdownBtn: {
    width: 52,
    "& button": {
      borderRadius: "4px 0 0 4px",
      height: "100%",
      padding: 0,
      minWidth: "52px",
      color: "#555",
      textTransform: "none",
      fontWeight: 300,
    },
  },
  search: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "0 4px 4px 0",
    width: 45,
    "& button": {
      borderRadius: 0,
    },
  },
};

export const SearchBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleKeywordOpen = () => {
    setIsOpen(!isOpen);
  };

  const keywordOnChange = (e) => {
    setKeywordInput(e.target.value);
  };

  const handleOnSearch = () => {
    if (!keywordInput) {
      return;
    }
    setIsOpen(false);
    navigate(`/search?keywords=${keywordInput}`);
    dispatch(fetchSearchResult(keywordInput));
  };

  const onClickDropdownToy = () => {
    setKeywordInput("toy");
    setIsOpen(false);
    navigate(`/search?keywords=toy`);
  };

  const onClickDropdownPc = () => {
    setKeywordInput("computer");
    setIsOpen(false);
    navigate(`/search?keywords=computer`);
  };

  const onClickDropdownBook = () => {
    setKeywordInput("book");
    setIsOpen(false);
    navigate(`/search?keywords=book`);
  };

  const onClickDropdownMisc = () => {
    setKeywordInput("misc");
    setIsOpen(false);
    navigate(`/search?keywords=misc`);
  };

  return (
    <Grid
      item
      container
      xs
      direction="row"
      align="center"
      justifyContent="center"
      sx={styles.root}
    >
      <Grid item sx={styles.dropdownBtn}>
        <Button
          variant="contained"
          color="grey"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          All
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>All Departments</MenuItem>
          <MenuItem>Arts & Crafts</MenuItem>
          <MenuItem>Books</MenuItem>
        </Menu>
      </Grid>
      <Grid item sx={styles.input} onClick={handleKeywordOpen}>
        <TextField
          variant="outlined"
          size="small"
          onChange={keywordOnChange}
          value={keywordInput}
        />
      </Grid>
      <Grid item sx={styles.search} onClick={handleOnSearch}>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid
        sx={{
          position: "absolute",
          bottom: "-95px",
          left: "293px",
          width: "calc(100% - 700px)",
          zIndex: "999",
        }}
        className={isOpen ? "" : "search__keyword__container"}
      >
        <Paper
          sx={{ width: "100%", pt: "0.3rem", pb: "0.3rem", borderRadius: 0 }}
        >
          <Grid>
            <Typography
              onClick={onClickDropdownToy}
              sx={{ textAlign: "left", pl: "0.2rem" }}
              className="search__keyword"
            >
              toy
            </Typography>
            <Typography
              onClick={onClickDropdownPc}
              sx={{ textAlign: "left", pl: "0.2rem" }}
              className="search__keyword"
            >
              computer
            </Typography>
            <Typography
              onClick={onClickDropdownBook}
              sx={{ textAlign: "left", pl: "0.2rem" }}
              className="search__keyword"
            >
              book
            </Typography>
            <Typography
              onClick={onClickDropdownMisc}
              sx={{ textAlign: "left", pl: "0.2rem" }}
              className="search__keyword"
            >
              misc
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
