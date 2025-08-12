import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../../types';

export type CartState = {
  items: Record<string, CartItem>; // key: productId
};

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId;
      const existing = state.items[id];
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items[id] = { productId: id, quantity: 1 };
      }
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      delete state.items[action.payload.productId];
    },
    incrementQty: (state, action: PayloadAction<{ productId: string }>) => {
      const item = state.items[action.payload.productId];
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action: PayloadAction<{ productId: string }>) => {
      const item = state.items[action.payload.productId];
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) delete state.items[action.payload.productId];
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;