import React from 'react'

import { useAppDispatch } from '../app/hooks'
import { logout } from '../features/users/authSlice'

export const LogoutButton = () => {
  const dispatch = useAppDispatch()
  return (
    <button type='button' onClick={() => dispatch(logout())}>
      Log out
    </button>
  )
}
