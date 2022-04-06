import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import blogServices from '../../services/blogs'
import type { TInitialState } from '../../types/blog'
import { AppDispatch } from './../../app/store'
import { TBlog } from './../../types/blog'

const initialState: TInitialState = {
  blogs: [],
  loading: false,
  error: null
}
export const blogsSLice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    initBlogs: (state, action: PayloadAction<TBlog[]>) => {
      state.blogs = action.payload
    },
    addBlog: (state, action: PayloadAction<TBlog>) => {
      state.blogs.push(action.payload)
    }
  }
})
export const { addBlog, initBlogs } = blogsSLice.actions

export const createBlog = (blog: TBlog) => async (dispatch: AppDispatch) => {
  try {
    const newBlog = await blogServices.create(blog)
    dispatch(addBlog(newBlog))
  } catch (error) {
    console.log(error)
  }
}

export const initializeBlogs = () => async (dispatch: AppDispatch) => {
  try {
    const blogs = await blogServices.getAll()
    dispatch(initBlogs(blogs))
  } catch (error) {
    console.log(error)
  }
}
