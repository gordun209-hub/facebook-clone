import { Center } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import SigninForm from '@/components/SigninForm'
import { selectCurrentUser } from '@/features/auth/authSlice'

export const Login = () => {
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.username !== undefined) {
      navigate('/')
    }
  }, [navigate, user])

  return (
    <Center h='700px'>
      <SigninForm />
    </Center>
  )
}

export default Login
