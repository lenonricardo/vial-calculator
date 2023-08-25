import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import auth from 'api/auth';

interface FormProps {
  action: string
}

export default function Form({ action }: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    try {
      const response = await auth.login({
        email,
        password
      })

      if (response) {
        // Handle successful login
        console.log('Logged in successfully');
      } else {

        console.log('error')
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

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
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      {error && <Alert severity="error" style={{ marginTop: '1rem' }}>{error}</Alert>}
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        style={{ marginTop: '1rem' }}
      >
        {isLoading ? <CircularProgress size={24} /> : action}
      </Button>
    </form>
  );
}