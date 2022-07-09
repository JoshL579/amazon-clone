import React from "react";
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { HeaderPopover } from "../../modules/HeaderButton";
import flag from "../../assets/img/Header/us_flag.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { height } from "@mui/system";
import { Link } from "react-router-dom";

const styles = {
  content: {
    p: 2,
    color: "#000",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    width: 26,
  },
  font: {
    large: {
      fontSize: 15,
    },
    small: {
      fontSize: 12,
    },
  },
  margin: {
    mb: 1,
  },
};

const LanguageSelectionMenu = () => {
  return (
    <Box sx={styles.content}>
      <Box sx={styles.flex}>
        <Typography sx={styles.font.large}>Change language</Typography>
        <Typography sx={styles.font.small}>
          <Link to="/">Learn more</Link>
        </Typography>
      </Box>
      <Box sx={styles.margin}>
        <FormControlLabel
          label={<Typography fontSize={14}>English-EN</Typography>}
          control={
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<CheckCircleOutlineOutlinedIcon />}
              size="small"
            />
          }
        />
      </Box>
      <Divider orientation="horizontal" />
      <Box sx={styles.margin}>
        {languages.map((lan) => {
          return (
            <Box>
              <FormControlLabel
                label={<Typography fontSize={14}>{lan.option}</Typography>}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon />}
                    checkedIcon={<CheckCircleOutlineOutlinedIcon />}
                    size="small"
                  />
                }
              />
            </Box>
          );
        })}
      </Box>
      <Divider orientation="horizontal" />
      <Box sx={styles.flex}>
        <Typography sx={styles.font}>Change currency</Typography>
        <Typography sx={styles.font.small}>
          <Link to="/">Learn more</Link>
        </Typography>
      </Box>
      <Box sx={[styles.flex, styles.margin]}>
        <Typography sx={styles.font}>$ - USD - US Dollar</Typography>
        <Typography sx={styles.font.large}>Change</Typography>
      </Box>
      <Divider orientation="horizontal" />
      <Box>
        <Box sx={[styles.flex, styles.margin]}>
          <img src={flag} style={{ width: 30, height: 25 }}></img>
          <Typography sx={styles.font}>
            You are shopping on Amazon.com
          </Typography>
        </Box>
        <Typography sx={styles.font} textAlign="center">
          <Link to="/">Change country/region.</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export const LanguageSelection = () => {
  return (
    <>
      <HeaderPopover
        placement="bottom-start"
        popover={<LanguageSelectionMenu />}
        width={270}
      >
        <Box sx={(styles.flex, { paddingTop: 1.5 })}>
          <img src={flag} style={styles.img}></img>
          <ArrowDropDownIcon />
        </Box>
      </HeaderPopover>
    </>
  );
};

const languages = [
  {
    option: "español - ES",
  },
  {
    option: "العربية - AR",
  },
  {
    option: "Deutsch - DE",
  },
  {
    option: "עברית - HE",
  },
  {
    option: "한국어 - KO",
  },
  {
    option: "português - PT",
  },
  {
    option: "中文 (简体) - ZH",
  },
  {
    option: "中文 (繁體) - ZH",
  },
];
