import {
  Wrapper,
  PrimaryPad,
  SecondaryPad,
  PrimaryGradientPad,
  SecondaryGradientPad
} from './styles'

enum AdvancedOperationEnum {
  PERCENTAGE = '%',
  PARENTHESIS_LEFT = '(',
  PARENTHESIS_RIGHT = ')',
  ROOT = '√',
  EXPONENTIATION = 'xʸ'
}

enum BasicOperationsEnum {
  DIVISION = '/',
  MULTIPLICATION = '*',
  SUBTRACTION = '-',
  ADDITION = '+',
  EQUALS = '='
}

export default function OperationPads() {
  const advancedOperationPads: AdvancedOperationEnum[] = Object.values(
    AdvancedOperationEnum
  )

  return (
    <>
      <Wrapper>
        {advancedOperationPads.map((label) => (
          <SecondaryPad key={label}>{label}</SecondaryPad>
        ))}
      </Wrapper>

      <Wrapper>
        <PrimaryPad>{BasicOperationsEnum.DIVISION}</PrimaryPad>
        <PrimaryGradientPad>
          {BasicOperationsEnum.MULTIPLICATION}
        </PrimaryGradientPad>
        <SecondaryGradientPad>
          {BasicOperationsEnum.SUBTRACTION}
        </SecondaryGradientPad>
        <SecondaryGradientPad>
          {BasicOperationsEnum.ADDITION}
        </SecondaryGradientPad>
        <SecondaryGradientPad>
          {BasicOperationsEnum.EQUALS}
        </SecondaryGradientPad>
      </Wrapper>
    </>
  )
}
