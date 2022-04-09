import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useSignupMutation } from '@/services/auth'
import { ISignupFormInput } from '@/types/User'

import { useAppDispatch } from '../app/hooks'
import { setCredentials } from '../features/auth/authSlice'

const SignUpForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signUp] = useSignupMutation()
  const { register, handleSubmit } = useForm<ISignupFormInput>()
  const onSubmit: SubmitHandler<ISignupFormInput> = async data => {
    const { name, password, username, email } = data

    const user = await signUp({ email, username, password, name }).unwrap()
    dispatch(setCredentials(user))
    localStorage.setItem('user', JSON.stringify(user.user))
    localStorage.setItem('token', JSON.stringify(user.token))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          {...register('username', {
            required: true,
            minLength: 6
          })}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          {...register('password', {
            required: true,
            maxLength: 20
          })}
        />
      </div>
      <div>
        <label htmlFor='name'>name</label>
        <input
          {...register('name', {
            required: true
          })}
        />
      </div>
      <div>
        <label htmlFor='email'>email</label>
        <input
          {...register('email', {
            required: true
          })}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default SignUpForm
