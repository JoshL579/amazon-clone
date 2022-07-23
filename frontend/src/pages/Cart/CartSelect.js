import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItemQuantity } from "../../store/cartReducer";

const CartSelect = (props) => {
  const { item } = props;
  const { cartItems } = useSelector((store) => store.cart);

  const [quantity, setQuantity] = useState(item.cartQuantity);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const payload = { 
      id: item.id,
      cartQuantity: parseInt(e.target.value, 10)
    }
    setQuantity(e.target.value)
    dispatch(setItemQuantity(payload));
  };

  return (
    <Box width="100px">
      <TextField
        select
        value={quantity}
        onChange={handleChange}
        fullWidth
        label="Qty"
        defaultValue={quantity}
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
        <MenuItem value="6">6</MenuItem>
        <MenuItem value="7">7</MenuItem>
        <MenuItem value="8">8</MenuItem>
        <MenuItem value="9">9</MenuItem>
      </TextField>
    </Box>
  );
};

export default CartSelect;
