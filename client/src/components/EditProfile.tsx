import { useAppSelector } from '@/app/hooks'
import { selectCurrentUser } from '@/features/auth/authSlice'

const EditProfileForm = () => {
  const user = useAppSelector(selectCurrentUser)
  return <form></form>
}
