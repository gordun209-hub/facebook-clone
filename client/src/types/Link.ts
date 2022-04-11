import { User } from '@/types/User'

export interface Link {
  id: number
  createdAt: Date
  description: string
  url: string
  postedBy: User
  title: string

  country: string
  voters: User[]
}
