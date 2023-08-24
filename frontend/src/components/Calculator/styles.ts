import styled from 'styled-components'

export const Wrapper = styled.div`
  width: val(--calculator-width);
  height: val(--calculator-height);
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const PadWrapper = styled.div`
  width: val(--calculator-width);
  height: val(--pad-height);
  border-radius: 0 0 1.5rem 1.5rem;
  display: f;
  flex-direction: row;
`
