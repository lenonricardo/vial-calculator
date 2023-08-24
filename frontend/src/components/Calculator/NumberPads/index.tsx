import { PadWrapper, Pads, BottomPads, DoublePad, Pad } from './styles'

interface NumberPadsProps {
  onInput: (input: string) => void
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

export default function NumberPads({ onInput }: NumberPadsProps) {
  const numberPads: NumberPadEnum[] = Object.values(NumberPadEnum)

  const handleNumberClick = (number: string) => {
    onInput(number)
  }

  return (
    <PadWrapper>
      <Pads>
        {numberPads.map((label) => (
          <Pad key={label} onClick={() => handleNumberClick(label)}>
            {label}
          </Pad>
        ))}
      </Pads>

      <BottomPads>
        <DoublePad onClick={() => handleNumberClick(BottomPadEnum.ZERO)}>
          {BottomPadEnum.ZERO}
        </DoublePad>
        <Pad onClick={() => handleNumberClick(BottomPadEnum.DECIMAL_POINT)}>
          {BottomPadEnum.DECIMAL_POINT}
        </Pad>
      </BottomPads>
    </PadWrapper>
  )
}
