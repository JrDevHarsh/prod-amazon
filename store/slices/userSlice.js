import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  products: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      // if cart is empty
      if (state.cart.length === 0) {
        state.cart = [...state.cart, action.payload];
      } else {
        // make copy of current state
        let prevCart = [...state.cart];
        // check if product already exists in cart
        const foundItem = prevCart.find(
          (item) => item.id === action.payload.id
        );
        // if exists then increment the quantity
        if (foundItem) {
          foundItem.quantity = action.payload.quantity;
          state.cart = [...prevCart];
        } else {
          // if not found then push in the cart
          state.cart = [...state.cart, action.payload];
        }
      }
    },
    removeFromCart: (state, action) => {
      let updatedCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [...updatedCart];
    },
  },
});

export const getCartQty = (state) =>
  state.app.cart?.reduce((prev, curr) => prev + curr.quantity, 0);

export const getCartPrice = (state) =>
  state.app.cart
    ?.reduce((acc, decc) => acc + decc.price * decc.quantity, 0)
    .toFixed(2);

export const getProductFromId = (id) => (state) => state.app.products[id];

export const findItemInCart = (id) => (state) =>
  state.app.cart.filter((item) => item.id === id)[0];

export const { updateProducts, addToCart, removeFromCart } = storeSlice.actions;

export default storeSlice.reducer;
