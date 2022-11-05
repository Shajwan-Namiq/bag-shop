import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "wishlist",
  initialState: {
    cart: [],
  },

  reducers: {
    addToWishList: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
    },
  },
});

export const wishListSlice = cartSlice.reducer;

export const { addToWishList } = cartSlice.actions;
