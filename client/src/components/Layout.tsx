import { useAppSelector } from '@/app/hooks'
import { selectCurrentUser } from '@/features/auth/authSlice'

const NeedToBeAuthorizedComponent = ({
  children
}: {
  children: React.ReactNode
}) => {
  const user = useAppSelector(selectCurrentUser)
  console.log(user)
  return { children }
}
