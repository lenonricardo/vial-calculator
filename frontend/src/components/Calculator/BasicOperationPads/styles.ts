import styled from 'styled-components'
import { Pad } from '../NumberPads/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PrimaryPad = styled(Pad)`
  && {
    background: var(--theme-secondary);
    color: #fff !important;

    &:hover {
      background: var(--theme-secondary);
    }
  }
`

export const PrimaryGradientPad = styled(Pad)`
  && {
    background: linear-gradient(
      180deg,
      var(--theme-secondary) 9%,
      var(--theme-primary) 100%
    );
    color: #fff !important;
  }
`

export const SecondaryGradientPad = styled(Pad)`
  && {
    background: var(--theme-primary);
    color: #fff !important;

    &:last-child {
      border-radius: 0 0 1.5rem 0;
    }

    &:hover {
      background: var(--theme-primary);
    }
  }
`
