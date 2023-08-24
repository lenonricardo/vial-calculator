import {
  Wrapper,
  PrimaryPad,
  SecondaryPad,
  PrimaryGradientPad,
  SecondaryGradientPad
} from './styles'

const OperationPads = () => (
  <>
    <Wrapper>
      <SecondaryPad>%</SecondaryPad>
      <SecondaryPad>(</SecondaryPad>
      <SecondaryPad>)</SecondaryPad>
      <SecondaryPad>√</SecondaryPad>
      <SecondaryPad>xʸ</SecondaryPad>
    </Wrapper>

    <Wrapper>
      <PrimaryPad>÷</PrimaryPad>
      <PrimaryGradientPad>x</PrimaryGradientPad>
      <SecondaryGradientPad>-</SecondaryGradientPad>
      <SecondaryGradientPad>+</SecondaryGradientPad>
      <SecondaryGradientPad>=</SecondaryGradientPad>
    </Wrapper>
  </>
)

export default OperationPads
