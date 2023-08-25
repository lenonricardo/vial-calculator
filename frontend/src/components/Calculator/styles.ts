import styled from 'styled-components'

export const Wrapper = styled.div`
  width: var(--calculator-width);
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const PadWrapper = styled.div`
  width: var(--calculator-width);
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: row;
`
