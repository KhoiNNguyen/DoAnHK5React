import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";
import { config } from "../../components/axiosClient/axiosClient";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await userService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProToCart = createAsyncThunk(
  "cart/add-cart",
  async (cartData, thunkAPI) => {
    try {
      return await userService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  "cart/get-cart",
  async (thunkAPI) => {
    try {
      return await userService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeProductCartItem=createAsyncThunk(
  "cart/delete-cart",
  async (cartId,thunkAPI) => {
    try {
      return await userService.removeProductCartItem(cartId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const UpdateCart = createAsyncThunk("cart/update-cart", async (cartData, thunkAPI) => {
  try {
      return await userService.updateCart(cartData);;
  } catch (err) {
      return thunkAPI.rejectWithValue(err);
  }
});


const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
  user: getTokenFromLocalStorage,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.info("Login Successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload; // Sử dụng action.payload thay vì action.error
        if (state.isError === true) {
          toast.error(action.payload.response.data.message); // Có thể cần kiểm tra null hoặc undefined trước khi truy cập response.data.message
        }
      })
      .addCase(addProToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = action.payload;
        if (state.isSuccess === true) {
          toast.info("add Successfully");
        }
      })
      .addCase(addProToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
       
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(removeProductCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.removeCart = action.payload;
        if(state.isSuccess===true){
          toast.success("remove success")
        }
       
      })
      .addCase(removeProductCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      })
      .addCase(UpdateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.removeCart = action.payload;
        if(state.isSuccess===true){
          toast.success("Update success")
        }
       
      })
      .addCase(UpdateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.payload.response.data.message);
        }
      });
  },
});

export default authSlice.reducer;
