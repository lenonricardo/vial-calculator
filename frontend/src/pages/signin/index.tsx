import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from 'components/TabPanel';
import Form from 'components/Form';
import { CustomBox, Wrapper } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export default function SignIn() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#F2D1DD',
      },
      secondary: {
        main: '#DBE1F2',
      },
    },
  });

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <CustomBox>
          <AppBar position="static">
            <Tabs

              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab label="Login" />
              <Tab label="Sign In" />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} dir={theme.direction}>
            <Form action="Log In"></Form>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Form action="Register"></Form>
          </TabPanel>
        </CustomBox>
      </ThemeProvider>
    </Wrapper>
  );
}