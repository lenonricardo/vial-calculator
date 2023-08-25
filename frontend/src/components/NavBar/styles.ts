import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { KeyboardArrowDown } from '@mui/icons-material'

export const Wrapper = styled.div`
  width: 100%;
  height: 53px;
  background-color: var(--theme-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const Img = styled(Image)`
  cursor: pointer;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const SignInWrapper = styled.div`
  padding-top: 10px;
`

export const SignIn = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  border: var(--font-pads) 2px solid;
  border-radius: 1.5rem;
  font-size: 15px;
  cursor: pointer;
  color: var(--font-result);
  font-weight: bold;

  &:hover {
    background: var(--theme-primary);
  }
`

export const CurrentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;
  color: var(--font-result);
  font-weight: bold;
  white-space: nowrap;
`

export const ArrowDown = styled(KeyboardArrowDown)`
  && {
    font-size: 25px;
  }
`
