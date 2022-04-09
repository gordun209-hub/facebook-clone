import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { api, User } from '@/services/auth'

import type { RootState } from '../../app/store'

export type AuthState = {
  user: User | null
  token: string | null
}
// const initialState: AuthState = {
//   user: window.localStorage.getItem('user')
//     ? JSON.parse(window.localStorage.getItem('user') as string)
//     : null,
//   token: window.localStorage.getItem('token') || null
// }
const initialState: AuthState = {
  user: null,
  token: null
}
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user
      state.token = token
    },
    logOut: state => {
      state.user = null
      state.token = null
    }
  }
})

export const { setCredentials, logOut } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user

export const selectToken = (state: RootState) => state.auth.token
