import { createContext, useContext, useState, ReactNode } from 'react'

interface CookieContextProps {
  cookieValue: string
  setCookieValue: (value: string) => void
}

const CookieContext = createContext<CookieContextProps | undefined>(undefined)

export const CookieProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [cookieValue, setCookieValue] = useState('')

  return (
    <CookieContext.Provider value={{ cookieValue, setCookieValue }}>
      {children}
    </CookieContext.Provider>
  )
}

export const useCookie = (): CookieContextProps => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error('useCookie must be used within a CookieProvider')
  }
  return context
}
