import React, { SyntheticEvent } from 'react'

import { useAppDispatch } from '../app/hooks'
import { loginUser } from '../features/users/authSlice'

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    try {
      dispatch(loginUser(username, password))
      setUsername('')
      setPassword('')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div
      className='card'
      style={{
        width: '400px',
        margin: 'auto',
        marginTop: '100px',
        padding: '20px'
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            value={username}
            type='text'
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}
