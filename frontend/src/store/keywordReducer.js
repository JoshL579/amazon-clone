import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetSearchResult } from "../api/endpoints/search";

const initialState = {
  searchProducts: [],
};

export const fetchSearchResult = createAsyncThunk(
  "product/search",
  async (keywords) => {
    return await apiGetSearchResult(keywords);
  }
);

export const keywordReducer = createSlice({
  name: "keyword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.searchProducts = action.payload.products;
    });
    builder.addCase(fetchSearchResult.rejected, (state) => {
      state.searchProducts = [];
    });
  },
});


export default keywordReducer.reducer;
