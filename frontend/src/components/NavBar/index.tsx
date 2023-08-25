import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomToolbar } from './styles';
import Cookies from 'js-cookie';

function ResponsiveAppBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E7EAEC',
      },
    },
  });

  const jwtToken = () => {
    const jwtToken = Cookies.get('jwt');
    console.log(jwtToken)

    return !!jwtToken
  }

  const path = () => {
    return jwtToken() ? '' : '/signin'
  }

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <CustomToolbar>
              <Link href={path()} passHref>
                <IconButton>
                  <Avatar  />
                  {!jwtToken() && 'SIGN IN' }
                </IconButton>
              </Link>
            </CustomToolbar>
          </Container>
        </AppBar>

    </ThemeProvider>
  );
}
export default ResponsiveAppBar;