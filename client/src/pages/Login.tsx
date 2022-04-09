import {
  Button,
  Center,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack
} from '@chakra-ui/react'
import { DevTool } from '@hookform/devtools'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { LoginRequest, useLoginMutation } from '@/services/auth'

import { setCredentials } from '../features/auth/authSlice'

function PasswordInput({
  name,
  onChange
}: {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        name={name}
        onChange={onChange}
      />
      <InputRightElement width='0.5rem'>
        <Button h='1.75rem' size='md' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export const Login = () => {
  type Inputs = {
    example: string
    exampleRequired: string
  }

  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()
  const [formState, setFormState] = useState<LoginRequest>({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const user = await login(formState).unwrap()
      dispatch(setCredentials(user))
      localStorage.setItem('user', JSON.stringify(user.user))
      localStorage.setItem('token', JSON.stringify(user.token))
      navigate('/')
    } catch (err) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Oh no, there was an error!',
        isClosable: true,
        position: 'top'
      })
    }
  }
  const [login, { isLoading }] = useLoginMutation()

  const handleChange = ({
    target: { name, value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState(prev => ({ ...prev, [name]: value }))

  return (
    <Center h='700px'>
      <VStack spacing='2'>
        <InputGroup>
          <Input
            name='username'
            type='text'
            placeholder='Email'
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <PasswordInput name='password' onChange={handleChange} />
        </InputGroup>
        <Button
          isFullWidth
          colorScheme='green'
          isLoading={isLoading}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Divider />
      </VStack>
    </Center>
  )
}

export default Login
