import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: sessionStorage.getItem("cartItems")
    ? JSON.parse(sessionStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
  isLoading: true,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // removeFromCart: (state, action) => {
    //   let newItems = [];
    //   state.cartItems.forEach((item) => {
    //     if (item.id !== action.payload.id) {
    //       console.log(action.payload.id);
    //       newItems.push(item);
    //     }
    //   });
    //   state.cartItems = newItems;
    // },

    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.cartQuantity;
        total += item.cartQuantity * item.price;
      });
      state.cartTotalQuantity = quantity;
      state.cartTotalPrice = total;
    },
  },
});

export const { addToCart, calculateTotals, removeFromCart } =
  cartReducer.actions;

// export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
