import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SingleSelect = ({ quantity, setQuantity }) => {
  // const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  console.log(quantity);

  return (
    <Box width="100px">
      <TextField
        select
        value={quantity}
        onChange={handleChange}
        fullWidth
        label="Qty"
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
      </TextField>
    </Box>
  );
};

export default SingleSelect;
