import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '@/features/counter/counterSlice'

import authReducer from '../features/auth/authSlice'
import { api } from '../services/auth'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
