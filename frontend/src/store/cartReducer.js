import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../data/cartItems";

// let cartItemsArr = [];

// Object.keys(cartItems.products).forEach((product) => {
//   cartItemsArr = cartItemsArr.concat(cartItems.products[product]);

//   return cartItemsArr;
// });

// console.log(cartItemsArr);

// const url = "http://localhost:3001/products/home/";

const initialState = {
  cartItems: sessionStorage.getItem("cartItems")
    ? JSON.parse(sessionStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isLoading: true,
};

// console.log(cartItemsArr.length);

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// });

// console.log(Array.isArray((initialState.cartItems)));

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.price;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.price;
      }
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // add item to basket using `state` and `action` props
    // const product = action.payload;
    // const itemExists = state.cartItems.find((item) => product.id === item.id);

    // if (itemExists) {
    //   itemExists.quantity += 1;
    // } else {
    //   const newProduct = { ...product, ...{ quantity: 1 } };
    //   state.cartItems.push(newProduct);
    // }

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

export const { addToCart } = cartReducer.actions;

// export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
