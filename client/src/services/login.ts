import axios from 'axios'

const baseUrl = 'http://localhost:3003/api/login'
//todo add type
const login = async (credentials: any) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
const loginService = {
  login
}
export default loginService
