import { Link } from 'react-router-dom'

import { useAuth } from '@/utils/useAuth'

import LogoutButton from './LogoutButton'

export default function Navbar() {
  const user = useAuth()

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <button>Blogs</button>
          </Link>
        </li>

        {user?.user?.name && (
          <>
            <LogoutButton />
            <li>
              <Link to='/admin'>
                <button> profile page</button>
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
              <button>Log in</button>
            </Link>
          </li>
        )}
      </ul>
      <style>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }
        ul { 
          display: flex;
          list-style: none;
        }
        li {
          margin: 0 1rem;
        }
        button {
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 5px #ccc;
          font-size: 1.2rem;
          font-family: sans-serif;
          color: #333;
          text-align: center;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;

          transition: all 0.3s ease-in-out;
          padding: 0.5rem 1rem;
        }
        button:hover {
          background-color: #ccc;
          border: 1px solid #ccc;
          color: #fff;
        }
         
      `}</style>
    </nav>
  )
}
