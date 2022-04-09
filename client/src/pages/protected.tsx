import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/utils/useAuth'

const ProtectedPage = () => {
  const navigate = useNavigate()
  const user = useAuth().user?.username
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
