import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";

let cartItemsArr = [];

Object.keys(cartItems.products).forEach((product) => {
  cartItemsArr.push(cartItems.products[product]);
  return cartItemsArr;
});

// const url = "http://localhost:3001/products/home/";

const initialState = {
  cartItems: [cartItemsArr],
  amount: 0,
  total: 0,
  isLoading: true,
};

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// });
export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      state.amount = state.amount + 1;
    },
    // remove: (state, action) => {
    //   let newItems = [];
    //   state.items.forEach((item) => {
    //     if (item.id !== action.id) {
    //       newItems.push(item);
    //     }
    //   });
    //   state.items = newItems;
    // },
  },
});

export const { add } = cartReducer.actions;

// export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
