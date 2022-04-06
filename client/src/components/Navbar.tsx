/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

import { useAppSelector } from '../app/hooks'
import { LogoutButton } from '../pages/LogoutButton'

// Top navbar
export default function Navbar() {
  const user = useAppSelector(state => state.auth.user)
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/blogs'>
            <button className='btn-logo'>blogs</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {user && (
          <>
            <LogoutButton />
            <li className='push-left'>
              <Link href='/admin'>
                <button className='btn-blue'>Write Blog</button>
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!user && (
          <li>
            <Link href='/enter'>
              <button className='btn-blue'>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
