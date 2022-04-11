import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '@/app/store'
import { Link } from '@/types/Link'

import { LoginRequest, SignUpRequest, UserResponse } from '../types/User'

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
    signup: builder.mutation<UserResponse, SignUpRequest>({
      query: credentials => ({
        url: 'signup',
        method: 'POST',
        body: credentials
      })
    }),

    getLoggedInUserData: builder.query({
      query: id => ({
        url: `/users/${id}`,
        method: 'GET'
      })
    }),

    getLinks: builder.query<Link[], void>({
      query: () => '/links'
    }),
    createLink: builder.mutation<Link, Link>({
      query: link => ({
        url: '/links',
        method: 'POST',
        body: link
      })
    })
  })
})

export const {
  useLoginMutation,
  useCreateLinkMutation,
  useGetLoggedInUserDataQuery,
  useSignupMutation,
  useGetLinksQuery
} = api
export default api
