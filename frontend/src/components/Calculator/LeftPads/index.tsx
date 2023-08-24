import { PadWrapper, TopPad, Pads, BottomPads, DoublePad, Pad } from './styles'

const LeftPads = () => (
  <PadWrapper>
    <Pads>
      <TopPad>CE</TopPad>
      <TopPad>C</TopPad>
      <TopPad>+/-</TopPad>

      <Pad>7</Pad>
      <Pad>8</Pad>
      <Pad>9</Pad>
      <Pad>4</Pad>
      <Pad>5</Pad>
      <Pad>6</Pad>
      <Pad>1</Pad>
      <Pad>2</Pad>
      <Pad>3</Pad>
    </Pads>

    <BottomPads>
      <DoublePad>0</DoublePad>
      <Pad>.</Pad>
    </BottomPads>
  </PadWrapper>
)

export default LeftPads
