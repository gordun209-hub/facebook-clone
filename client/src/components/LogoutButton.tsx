import { useAppDispatch } from '@/app/hooks'
import { logOut } from '@/features/auth/authSlice'

const LogoutButton = () => {
  const dispatch = useAppDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
  return (
    <button className='logout-button' onClick={handleLogOut}>
      <span className='logout-button__text'>Logout</span>
    </button>
  )
}
export default LogoutButton
