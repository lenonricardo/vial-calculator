import axios from '../services/api'

interface LoginPayload {
  email: string,
  password: string,
}

export default {
  login(params: LoginPayload) {
    return axios.post('/login', params)
  }
}
