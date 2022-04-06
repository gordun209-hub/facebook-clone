import React from 'react'

import { useAppSelector } from '../app/hooks'
import { LoginForm } from './LoginForm'

const EnterPage = () => {
  const user = useAppSelector(state => state.auth.user)

  return <>{!user ? <LoginForm /> : null}</>
}
export default EnterPage
