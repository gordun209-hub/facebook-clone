import axios, { AxiosRequestConfig } from 'axios'

import { TBlog } from './../types/blog'

const baseUrl = '/api/blogs'
let token: string

const setToken = (newToken: string) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
// todo add type
const create = async (newObject: TBlog) => {
  const config: AxiosRequestConfig<TBlog> = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
const blogServices = {
  setToken,
  getAll,
  create
}
export default blogServices
