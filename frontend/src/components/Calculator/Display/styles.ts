import styled from 'styled-components'
import BackspaceIcon from '@mui/icons-material/Backspace'
import HistoryIcon from '@mui/icons-material/History'

export const Wrapper = styled.div`
  width: var(--calculator-width);
  height: var(--calculator-height);
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`

export const MemoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const MemoryPad = styled.div`
  width: var(--memory-pad-width);
  height: var(--memory-pad-height);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--memory-pad-font-size);
  color: var(--font-pads);
  border-right: 0.1rem solid var(--font-pads-secondary);
  margin-bottom: 1rem;
  cursor: pointer;
  user-select: none;

  &:last-child {
    border-right: none;
  }
`

export const CustomBackspaceIcon = styled(BackspaceIcon)`
  font-size: var(--default-font-size);
  margin-right: 10px;
  color: var(--theme-primary);
  cursor: pointer;
`

export const Result = styled.div`
  color: var(--font-result);
  font-size: var(--result-font-size);
  margin-right: 10px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const CustomHistoryIcon = styled(HistoryIcon)`
  font-size: var(--default-font-size);
  margin-right: 10px;
  color: var(--theme-primary);
  cursor: pointer;
`

export const CurrentOperation = styled.div`
  color: var(--font-current);
  font-size: 18px;
  margin-right: 10px;
  padding-bottom: 60px;
`
