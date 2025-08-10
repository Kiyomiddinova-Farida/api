import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slices/dataSlice'
import editingReducer from './slices/editingSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    editing: editingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch