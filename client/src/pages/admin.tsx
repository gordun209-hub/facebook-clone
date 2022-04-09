import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { useGetLoggedInUserDataQuery } from '@/services/auth'

const AdminPage = () => {
  const id = useAppSelector(state => state.auth.user?.id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      navigate('/login')
    }
  })
  const { data } = useGetLoggedInUserDataQuery(id)
  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }
  return (
    <div>
      <h1>Admin</h1>
      <p>The Admin Page is accessible by every signed in admin user.</p>
    </div>
  )
}

export default AdminPage
