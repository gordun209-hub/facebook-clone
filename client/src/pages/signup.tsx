import { Center } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import SignUpForm from '@/components/SignUpForm'
import { selectCurrentUser } from '@/features/auth/authSlice'

export const SignUp = () => {
  const user = useAppSelector(selectCurrentUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (user?.username !== undefined) {
      navigate('/')
    }
  }, [navigate, user])
  return (
    <Center h='700px'>
      <SignUpForm />
    </Center>
  )
}

export default SignUp
