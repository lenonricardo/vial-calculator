import styled from 'styled-components'
import { Pad } from '../NumberPads/styles'

export const TopPadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  transform: translateY(var(--pad-width));
  margin-top: calc(-1 * var(--pad-width));
  margin-right: var(--pad-width);
`

export const TopPad = styled(Pad)`
  background-color: var(--secondary-operations);
`
