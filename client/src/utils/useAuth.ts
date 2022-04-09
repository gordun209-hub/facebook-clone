import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { selectCurrentUser, selectToken } from '../features/auth/authSlice'

export const useAuth = () => {
  const user = useSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}

export const useToken = () => {
  const token = useSelector(selectToken)
  return useMemo(() => {
    token
  }, [token])
}
