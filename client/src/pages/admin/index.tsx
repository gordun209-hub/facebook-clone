import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import CreateLinkForm from '@/components/CreateLinkForm'
import EditLinkForm from '@/components/EditLinkForm'
import UsersLinks from '@/components/UsersLinks'
import { useGetLoggedInUserDataQuery } from '@/services/api'

import {
  selectIsCreating,
  selectIsDeleting,
  selectIsEditing,
  selectIsViewing
} from '../../features/userActions/userActionSlice'

const AdminPage = () => {
  const id = useAppSelector(state => state.auth.user?.id)
  const navigate = useNavigate()
  const isEditing = useAppSelector(selectIsEditing)
  const isViewing = useAppSelector(selectIsViewing)
  const isCreating = useAppSelector(selectIsCreating)
  const { data } = useGetLoggedInUserDataQuery(id)
  useEffect(() => {
    if (!id) {
      navigate('/login')
    }
  })

  if (data && id) {
    return (
      <>
        <div>
          {isEditing && <EditLinkForm />}
          {isCreating && <CreateLinkForm />}
          {isViewing && <UsersLinks id={id} />}
          <UsersLinks id={id} />
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
