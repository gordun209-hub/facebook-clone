import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/types/User'

import type { RootState } from '../../app/store'
import { stringifyToLocalStorage } from '../../utils/useLocalStorage'

export type AuthState = {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: stringifyToLocalStorage('user'),
  token: stringifyToLocalStorage('token')
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
// set credentials after dispatch

export const { setCredentials, logOut } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user

export const selectToken = (state: RootState) => state.auth.token
