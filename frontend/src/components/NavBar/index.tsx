import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import { Wrapper, SignIn, Img, SignInWrapper } from './styles';
import Cookies from 'js-cookie';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    setIsAuthenticated(!!getJwtToken())
  }, [])

  const getJwtToken = () => {
      return Cookies.get('jwt');
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setIsAuthenticated(false)
    Cookies.remove('jwt')
  }

  const open = Boolean(anchorEl);

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Img
          src="/img/logo.svg"
          alt="Navbar Logo"
          width={100}
          height={50}
        />
      </Link>

      <Link href="/signin" passHref>
        <SignInWrapper>
          {!isAuthenticated ?
            <SignIn>
                <Avatar sx={{ width: 24, height: 24 }}  />
                <span>Sign In</span>
            </SignIn>
            :
            <div>

              <SignIn onClick={handleClick}>
                Howdy, Lenon!
              </SignIn>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem sx={{width: 100}} onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          }
        </SignInWrapper>
      </Link>
    </Wrapper>
  );
}
