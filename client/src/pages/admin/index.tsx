import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import CreateLinkForm from '@/components/CreateLinkForm'
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
          <CreateLinkForm />
        </div>
        <style>{`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          ,
          h1 {
            font-size: 2rem;
            font-family: sans-serif;
            color: #333;
          }
        `}</style>
      </>
    )
  }
}

export default AdminPage
