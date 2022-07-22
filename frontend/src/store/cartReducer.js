import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: sessionStorage.getItem("cartItems")
    ? JSON.parse(sessionStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: sessionStorage.getItem("cartTotalQuantity")
    ? JSON.parse(sessionStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalPrice: sessionStorage.getItem("cartTotalPrice")
    ? JSON.parse(sessionStorage.getItem("cartTotalPrice"))
    : 0,
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

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(tempProduct);
      }

      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // removeFromCart: (state, action) => {
    //   state.cartItems = state.cartItems.filter(
    //     (item) => item.id !== action.payload
    //   );
    //   sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },

    removeFromCart: (state, action) => {
      let newItems = [];
      state.cartItems.forEach((item) => {
        if (item.id !== action.payload) {
          console.log(action.payload);
          newItems.push(item);
        }
      });
      state.cartItems = newItems;

      sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.cartQuantity;
        total += item.cartQuantity * item.price;
      });
      state.cartTotalQuantity = quantity;
      state.cartTotalPrice = total;

      sessionStorage.setItem(
        "cartTotalQuantity",
        JSON.stringify(state.cartTotalQuantity)
      );

      sessionStorage.setItem(
        "cartTotalPrice",
        JSON.stringify(state.cartTotalPrice)
      );
    },
  },
});

export const { addToCart, calculateTotals, removeFromCart } =
  cartReducer.actions;

// export const selectCart = (state) => state.cart.value;

export default cartReducer.reducer;
