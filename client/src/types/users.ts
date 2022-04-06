import { TBlog } from './blog'

export type TUser = {
  username: string
  id: string
  blogs: TBlog[]
}
export type TUsers = {
  users: TUser[] | never[]
}
