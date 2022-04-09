import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/hooks'
import { setCredentials } from '@/features/auth/authSlice'
import { useLoginMutation } from '@/services/auth'

interface IFormInput {
  username: string
  password: string
  confirmPassword: string
}
const SigninForm = () => {
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const [passwordError, setPasswordError] = useState('')
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const { confirmPassword, password, username } = data

    password !== confirmPassword
      ? setPasswordError('Passwords do not match')
      : setPasswordError('')
    const user = await login({ username, password }).unwrap()
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
        {errors.username?.type === 'required' && 'Username is required'}
        {errors.username?.type === 'minLength' &&
          'Username must be at least 6 characters'}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          {...register('password', {
            required: true,
            maxLength: 20,
            minLength: 6
          })}
        />
        {errors.password?.type === 'required' && 'Password is required'}
        {errors.password?.type === 'maxLength' &&
          'Password must be 20 characters or less'}
      </div>
      <div>
        <label htmlFor='confirmPassword'>confirm password</label>
        <input
          {...register('confirmPassword', {
            required: true,
            maxLength: 20,
            minLength: 6
          })}
        />
        {errors.confirmPassword?.type === 'required' && 'Password is required'}
      </div>
      <div>{passwordError}</div>
      <button type='submit'>Submit</button>
    </form>
  )
}
export default SigninForm

{
  /* <input {...register('firstName', { required: true, maxLength: 20 })} />
<input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
<input type='number' {...register('age', { min: 18, max: 99 })} />
<input type='submit' /> */
}
