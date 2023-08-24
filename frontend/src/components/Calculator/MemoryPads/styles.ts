import styled from 'styled-components'
import { Pad } from '../NumberPads/styles'

export const MemoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(var(--pad-width));
`
export const SecondaryPad = styled(Pad)`
  background: var(--secondary-operations);

  &:hover {
    background: var(--secondary-operations);
  }
`
