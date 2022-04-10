import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { useGetLoggedInUserDataQuery } from '@/services/api'

const AdminPage = () => {
  const id = useAppSelector(state => state.auth.user?.id)
  const navigate = useNavigate()

  const { data } = useGetLoggedInUserDataQuery(id)
  useEffect(() => {
    if (!id) {
      navigate('/login')
    }
  })

  if (data) {
    return (
      <>
        <div>
          <h1>welcome {data?.name} </h1>
        </div>
      </>
    )
  }
}

export default AdminPage
