import { configureStore } from '@reduxjs/toolkit'

import { blogsSLice } from '../features/blogs/blogsSLice'
import { authSlice } from '../features/users/authSlice'
import { usersSlice } from './../features/users/usersSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      blogs: blogsSLice.reducer,
      auth: authSlice.reducer,
      users: usersSlice.reducer
    }
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
