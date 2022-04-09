import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../app/store'

export interface User {
  email: string
  username: string
  name: string
  id: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'signin',
        method: 'POST',
        body: credentials
      })
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected'
    }),
    getLoggedInUserData: builder.query({
      query: id => ({
        url: `/users/${id}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useLoginMutation,
  useProtectedMutation,
  useGetLoggedInUserDataQuery
} = api
export default api
