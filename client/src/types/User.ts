export interface User {
  email: string
  username: string
  name: string
  id: number
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface ILoginFormInput {
  username: string
  password: string
  confirmPassword: string
}

export interface ISignupFormInput {
  username: string
  password: string
  name: string
  email: string
}

export type SignUpRequest = ISignupFormInput
