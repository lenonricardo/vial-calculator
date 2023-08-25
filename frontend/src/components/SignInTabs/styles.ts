import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'
import { AccountCircleRounded, PersonAdd } from '@mui/icons-material'

export const Wrapper = styled.main`
  background-color: var(--theme-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -64px;
`

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
`

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
`

export const TabsTrigger = styled(Tabs.Trigger)`
  font-family: inherit;
  background-color: white;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 1;
  color: var(--font-primary);
  user-select: none;
  border: none;
  cursor: pointer;
  border-bottom: 1px var(--theme-primary) solid;

  &:first-child {
    border-top-left-radius: 6px;
    border-right: 1px var(--theme-primary) solid;
  }

  &:last-child {
    border-top-right-radius: 6px;
  }

  &:hover {
    color: var(--theme-secondary);
  }

  &:active {
    color: var(--theme-primary);
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }

  &:focus {
    position: relative;
    box-shadow: 0 0 0 1px var(--theme-primary);
    color: var(--theme-secondary);
  }
`

export const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 50px;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  outline: none;
  background: linear-gradient(
    180deg,
    var(--theme-primary) 9%,
    var(--theme-secondary) 100%
  );
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &[data-state='inactive'] {
    display: none;
  }
`

export const AccountIcon = styled(AccountCircleRounded)`
  && {
    font-size: 90px;
    color: white;
  }
`

export const RegisterIcon = styled(PersonAdd)`
  && {
    font-size: 90px;
    color: white;
  }
`
