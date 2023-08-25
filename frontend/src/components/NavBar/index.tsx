import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomToolbar } from './styles';

function ResponsiveAppBar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#E7EAEC',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <CustomToolbar>
              <Link href="/signin" passHref>
                <IconButton>
                  <Avatar  />
                  SIGN IN
                </IconButton>
              </Link>
            </CustomToolbar>
          </Container>
        </AppBar>

    </ThemeProvider>
  );
}
export default ResponsiveAppBar;