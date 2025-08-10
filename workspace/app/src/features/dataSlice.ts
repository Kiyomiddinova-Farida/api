import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Item = {
  id: string
  title: string
  description: string
}

export type UpsertItem = Omit<Item, 'id'> & { id?: string }

type DataState = {
  items: Item[]
}

const initialState: DataState = {
  items: [],
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: {
      prepare: (payload: UpsertItem) => {
        return { payload: { ...payload, id: payload.id ?? nanoid() } }
      },
      reducer: (state, action: PayloadAction<Item>) => {
        state.items.push(action.payload)
      },
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex((i) => i.id === action.payload.id)
      if (index !== -1) state.items[index] = action.payload
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clearAll: (state) => {
      state.items = []
    },
  },
})

export const { addItem, updateItem, removeItem, clearAll } = dataSlice.actions
export default dataSlice.reducer