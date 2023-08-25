import styled from 'styled-components'
import BackspaceIcon from '@mui/icons-material/Backspace'
import HistoryIcon from '@mui/icons-material/History'

export const Wrapper = styled.div`
  width: var(--primary-width);
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`

export const CustomBackspaceIcon = styled(BackspaceIcon)`
  && {
    font-size: var(--default-font-size);
    margin-right: 10px;
    color: var(--theme-secondary);
    cursor: pointer;
  }
`

export const Result = styled.div`
  color: var(--font-primary-color);
  font-size: var(--result-font-size);
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: auto;
  width: 430px;
  text-align: right;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const CustomHistoryIcon = styled(HistoryIcon)`
  && {
    font-size: var(--default-font-size);
    margin-right: 10px;
    color: var(--theme-secondary);
    cursor: pointer;
  }
`
