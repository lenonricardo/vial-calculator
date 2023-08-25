import styled from 'styled-components'
import Box from '@mui/material/Box';

export const Wrapper = styled.main`
  background-color: var(--theme-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CustomBox = styled(Box)`
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 450px;
  background-color: #fff;
`

export const CustomTabs = styled(Box)`
  background-color: var(--theme-background);
`


