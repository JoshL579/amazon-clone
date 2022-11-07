import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import keywordReducer from "./keywordReducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    keyword: keywordReducer,
  },
});
