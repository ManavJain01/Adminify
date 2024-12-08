import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.cart.push({
      //   ...action.payload,  // Spread the item details from the action payload
      // });

      state.cart = [action.payload];
    },
    removeFromCart: (state, action) => {
      const tag = action.payload;
      state.cart = state.cart.filter((item) => item?.tag !== tag); // Remove item by id
    },
    emptyCart: (state, action) => {
      state.cart = [];
    }
  },
});

export const { addToCart, emptyCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;