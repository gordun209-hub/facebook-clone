import { createSlice } from '@reduxjs/toolkit'

import usersService from '../../services/users'
import { AppDispatch } from './../../app/store'
import { TUsers } from './../../types/users'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  } as TUsers,
  reducers: {
    initUsers: (state, action) => {
      return action.payload
    }
  }
})

export default usersSlice.reducer
export const { initUsers } = usersSlice.actions

export const initializeUsers = () => async (dispatch: AppDispatch) => {
  const users = await usersService.getAll()
  dispatch(initUsers(users))
}
