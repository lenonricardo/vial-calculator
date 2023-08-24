import {
  Wrapper,
  Header,
  CustomHistoryIcon,
  CurrentOperation,
  Result,
  CustomBackspaceIcon,
  MemoryWrapper,
  MemoryPad
} from './styles'

const Display = () => (
  <Wrapper>
    <Header>
      <CustomHistoryIcon></CustomHistoryIcon>
      <CurrentOperation>100 + 200</CurrentOperation>
    </Header>

    <Result>9462</Result>
    <CustomBackspaceIcon />

    <MemoryWrapper>
      <MemoryPad>M+</MemoryPad>
      <MemoryPad>M-</MemoryPad>
      <MemoryPad>MR</MemoryPad>
      <MemoryPad>MC</MemoryPad>
    </MemoryWrapper>
  </Wrapper>
)

export default Display
