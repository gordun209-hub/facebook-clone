import { User } from '../types/User'

export const parseFromLocalStorage = (value: string) => {
  return JSON.parse(value)
}

export const stringifyToLocalStorage = (value: string) =>
  JSON.parse(window.localStorage.getItem(value) as string) || null

export const setToLocalStorage = (key: string, value: User | string) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
