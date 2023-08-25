import { AxiosResponse } from 'axios'
import axios from '../services/api'

export interface LoginPayload {
  email: string,
  password: string,
}

export interface LoginResponse {
  access_token: string
}

export interface RegisterResponse {
  id: number,
  email: string,
}

export default {
  login(params: LoginPayload): Promise<AxiosResponse<LoginResponse>> {
    return axios.post('/login', params)
  },
  register(params: LoginPayload): Promise<AxiosResponse<RegisterResponse>> {
    return axios.post('/user', params)
  }
}
