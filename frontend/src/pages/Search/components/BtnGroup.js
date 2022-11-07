import React from "react";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BtnGroup = () => {
  return (
    <Grid container display="flex" justifyContent="center">
      <ButtonGroup
        variant="string"
        color="grey"
        sx={{ border: "1px solid lightgrey", padding: 1, pl: 0, pr: 0, borderRadius: "10px", m: 2 }}
      >
        <Button display="flex">
          <ChevronLeftIcon />
          <Typography>Previous</Typography>
        </Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>...</Button>
        <Button>20</Button>
        <Button display="flex">
          <Typography>Next</Typography>
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default BtnGroup;
