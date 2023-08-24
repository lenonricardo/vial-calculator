import styled from 'styled-components'
import { Pad } from '../NumberPads/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PrimaryPad = styled(Pad)`
  background: var(--theme-primary);
  color: #fff !important;
`

export const PrimaryGradientPad = styled(Pad)`
  background: linear-gradient(
    180deg,
    var(--theme-primary) 9%,
    var(--theme-secondary) 100%
  );
  color: #fff !important;
`

export const SecondaryGradientPad = styled(Pad)`
  background: var(--theme-secondary);
  color: #fff !important;

  &:last-child {
    border-radius: 0 0 1.5rem 0;
  }
`
