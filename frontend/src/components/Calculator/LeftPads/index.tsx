import { PadWrapper, TopPad, Pads, BottomPads, DoublePad, Pad } from './styles'

enum TopPadEnum {
  CE = 'CE',
  C = 'C',
  CHANGE_SIGN = '+/-'
}

enum NumberPadEnum {
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  ONE = '1',
  TWO = '2',
  THREE = '3'
}

enum BottomPadEnum {
  ZERO = '0',
  DECIMAL_POINT = '.'
}

export default function LeftPads() {
  const topPads: TopPadEnum[] = Object.values(TopPadEnum)
  const numberPads: NumberPadEnum[] = Object.values(NumberPadEnum)

  return (
    <PadWrapper>
      <Pads>
        {topPads.map((label) => (
          <TopPad key={label}>{label}</TopPad>
        ))}

        {numberPads.map((label) => (
          <Pad key={label}>{label}</Pad>
        ))}
      </Pads>

      <BottomPads>
        <DoublePad>{BottomPadEnum.ZERO}</DoublePad>
        <Pad>{BottomPadEnum.DECIMAL_POINT}</Pad>
      </BottomPads>
    </PadWrapper>
  )
}
