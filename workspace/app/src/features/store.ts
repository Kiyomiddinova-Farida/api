import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import editingReducer from './editingSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    editing: editingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch