import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Item } from './dataSlice'

type EditingState = {
  itemBeingEdited: Item | null
}

const initialState: EditingState = {
  itemBeingEdited: null,
}

const editingSlice = createSlice({
  name: 'editing',
  initialState,
  reducers: {
    startEditing: (state, action: PayloadAction<Item>) => {
      state.itemBeingEdited = action.payload
    },
    stopEditing: (state) => {
      state.itemBeingEdited = null
    },
  },
})

export const { startEditing, stopEditing } = editingSlice.actions
export default editingSlice.reducer