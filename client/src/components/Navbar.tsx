import { Link } from 'react-router-dom'

import { useAuth } from '@/utils/useAuth'

import LogoutButton from './LogoutButton'

export default function Navbar() {
  const user = useAuth()

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>
            <button className='btn-logo'>Blogs</button>
          </Link>
        </li>

        {user?.user?.name && (
          <>
            <LogoutButton />
            <li>
              <Link to='/admin'>
                <button className='btn-blue'> profile page</button>
              </Link>
            </li>
            <li>
              <Link to={`/${user.user.name}`}></Link>
            </li>
          </>
        )}

        {!user.user?.name && (
          <li>
            <Link to='/login'>
              <button className='btn-blue'>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
