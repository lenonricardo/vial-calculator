import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Link from 'next/link'
import {
  Wrapper,
  SignIn,
  Img,
  SignInWrapper,
  CustomLink,
  CurrentUser,
  ArrowDown
} from './styles'
import Cookies from 'js-cookie'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useCookie } from '../../context/CookieContext'

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [userEmail, setuserEmail] = useState<string | null>('')
  const [signInRoute, setSignInRoute] = useState<string>('/signin')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const { cookieValue } = useCookie()

  useEffect(() => {
    const hasJwtToken = getJwtToken()
    setIsAuthenticated(!!hasJwtToken)
    setuserEmail(localStorage.getItem('user'))

    setSignInRoute(!hasJwtToken ? '/signin' : '')
  }, [cookieValue])

  const getJwtToken = () => {
    return Cookies.get('jwt')
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    Cookies.remove('jwt')
    setSignInRoute('/signin')
  }

  const open = Boolean(anchorEl)

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Img src="/img/logo.svg" alt="Navbar Logo" width={100} height={50} />
      </Link>

      <CustomLink href={signInRoute} passHref>
        <SignInWrapper>
          {!isAuthenticated ? (
            <SignIn>
              <Avatar sx={{ width: 24, height: 24 }} />
              <span>Sign In</span>
            </SignIn>
          ) : (
            <div>
              <CurrentUser onClick={handleClick}>
                <ArrowDown></ArrowDown>
                Hey, {userEmail}
              </CurrentUser>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                <MenuItem sx={{ width: 100 }} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </SignInWrapper>
      </CustomLink>
    </Wrapper>
  )
}
