export type TBlog = {
  author: string
  title: string
  url: string
  id: number
}
export type IBlogs = {
  blogs: TBlog[]
}

export type TInitialState = {
  blogs: TBlog[]
  loading: boolean
  error: null | string
}
