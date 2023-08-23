import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: var(--theme-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Calculator = styled.div`
  width: 450px;
  height: 750px;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const PadButtons = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 0 0 1.5rem 1.5rem;
  display: f;
  flex-direction: row;
`

export const Display = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 1.5rem 1.5rem 0 0;
`

export const BottomButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export const NumberButtons = styled.div`
  display: flex;
  flex-direction: column;
`

export const SecondaryButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(90px, 1fr));
  width: calc(450px - 90px - 90px);
  max-height: calc(450px - 90px);
`

export const OperationButtons = styled.div`
  display: flex;
  flex-direction: column;
`

export const TerciaryButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Button = styled.div`
  width: 90px;
  height: 90px;
  color: var(--font-pads);
  display: flex;
  font-size: 35px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  transition: background 0.8s;

  /* &:hover {
    background: var(--secondary-operations) radial-gradient(circle, transparent 1%, var(--secondary-operations) 1%) center/15000%;
  }

  &:active {
    background-color: var(--secondary-operations);
    background-size: 100%;
    transition: background 0s;
  } */
`

export const ButtonSecondary = styled(Button)`
  background-color: var(--secondary-operations);
`

export const DoubleButton = styled(Button)`
  width: calc(90px + 90px);
`

export const ButtonPrimary = styled(Button)`
  background: var(--theme-primary);
  color: #fff;
`
export const ButtonGradient1 = styled(Button)`
  background: linear-gradient(
    180deg,
    var(--theme-primary) 9%,
    var(--theme-secondary) 100%
  );
  color: #fff;
`

export const ButtonGradient2 = styled(Button)`
  background: var(--theme-secondary);
  color: #fff;

  &:last-child {
    border-radius: 0 0 1.5rem 0;
  }
`
