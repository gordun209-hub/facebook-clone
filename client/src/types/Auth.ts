import { User } from './User'

export type AuthState = {
  user: User | null
  token: string | null
}

export type Payload = {
  user: User
  token: string
}
