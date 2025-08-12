import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type WishlistState = {
  ids: string[];
};

const initialState: WishlistState = {
  ids: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<{ productId: string }>) => {
      const id = action.payload.productId;
      const idx = state.ids.indexOf(id);
      if (idx >= 0) state.ids.splice(idx, 1);
      else state.ids.push(id);
    },
    clearWishlist: (state) => {
      state.ids = [];
    },
  },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;