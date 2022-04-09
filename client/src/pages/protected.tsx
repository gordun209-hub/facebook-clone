import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'

const ProtectedPage = () => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.auth.user)
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is only accessible to authenticated users.</p>
    </div>
  )
}

export default ProtectedPage
