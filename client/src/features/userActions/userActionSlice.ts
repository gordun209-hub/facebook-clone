import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'

interface UserActionState {
  isEditing: boolean
  isCreating: boolean
  isDeleting: boolean
  isViewing: boolean
}

const initialState: UserActionState = {
  isEditing: false,
  isCreating: false,
  isDeleting: false,
  isViewing: false
}

export const userActionSlice = createSlice({
  name: 'userAction',
  initialState,
  reducers: {
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload
    },
    setIsCreating: (state, action: PayloadAction<boolean>) => {
      state.isCreating = action.payload
    },
    setIsDeleting: (state, action: PayloadAction<boolean>) => {
      state.isDeleting = action.payload
    },
    setIsViewing: (state, action: PayloadAction<boolean>) => {
      state.isViewing = action.payload
    }
  }
})

export const { setIsEditing, setIsCreating, setIsDeleting, setIsViewing } =
  userActionSlice.actions

export const selectIsEditing = (state: RootState) => state.userAction.isEditing
export const selectIsCreating = (state: RootState) =>
  state.userAction.isCreating
export const selectIsDeleting = (state: RootState) =>
  state.userAction.isDeleting
export const selectIsViewing = (state: RootState) => state.userAction.isViewing

export default userActionSlice.reducer
