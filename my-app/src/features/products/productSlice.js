import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getFavorite=createAsyncThunk("product/wishlish/get",
    async (thunkAPI) => {
      try {
        return await productService.getFavorites();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
)

export const addToWishlist = createAsyncThunk(
  "product/wishlist/add",
  async (wishlist, thunkAPI) => {
    try {
      return await productService.addToWishlist(wishlist);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeToWishList = createAsyncThunk(
  "product/wishlist/remove",
  async (id, thunkAPI) => {
    try {
      return await productService.removeToWishList(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user:"",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
       state.message="Product add to wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        
      })
      .addCase(removeToWishList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeToWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.removeToWishList = action.payload;
       state.message="Product remove to wishlist";
      })
      .addCase(removeToWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        
      })
      .addCase(getFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getFavorite = action.payload;
       state.message="Product remove to wishlist";
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        
      });
  },
});

export default productSlice.reducer;
