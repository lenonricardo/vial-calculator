import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export const Wrapper = styled.div`
  height: var(--calculator-width);
  background: var(--secondary-operations);
  display: flex;
  flex-direction: column;
  border-radius: 0 0 1.5rem 1.5rem;
  padding-top: 1rem;
  align-items: flex-end;
  justify-content: space-between;
`

export const Expression = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
  font-size: var(--memory-pad-font-size);
  color: var(--font-primary);
`
export const Total = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5rem 2.5rem 0;
  font-size: var(--default-font-size);
  color: var(--font-primary);
`

export const CustomDeleteForeverIcon = styled(DeleteForeverIcon)`
  && {
    font-size: var(--default-font-size);
    color: var(--font-primary);
    cursor: pointer;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }
`
