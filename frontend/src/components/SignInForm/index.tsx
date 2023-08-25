import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from '@mui/material'
import { Alert } from '@mui/material'
import { LoginPayload, LoginResponse } from 'api/auth'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useCookie } from '../../context/CookieContext'

interface FormProps {
  action: string
  message: string
  request: (params: LoginPayload) => Promise<AxiosResponse>
}

export default function SignInForm({ action, request, message }: FormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const { setCookieValue } = useCookie()

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const response = await request({
        email,
        password
      })

      const { data } = response

      setSuccessMessage(message)
      resetForm()

      if (data?.access_token) {
        setCookies(data)
        router.push('/')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error?.response?.data?.message
        setError(errorMessage || 'An error occurred with the request.')
      } else {
        setError('An error occurred. Please try again later.')
      }
    }

    setLoading(false)
  }

  const setCookies = (response: LoginResponse) => {
    Cookies.set('jwt', response.access_token)
    setCookieValue(response.access_token)
    localStorage.setItem('user', email)
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        margin="normal"
        variant="standard"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        margin="normal"
        variant="standard"
      />
      {error && (
        <Alert severity="error" style={{ marginTop: '1rem' }}>
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert severity="success" style={{ marginTop: '1rem' }}>
          {successMessage}
        </Alert>
      )}
      <Button
        type="submit"
        variant="outlined"
        disabled={isLoading}
        style={{ marginTop: '1rem' }}
      >
        {isLoading ? <CircularProgress size={24} /> : action}
      </Button>
    </form>
  )
}
