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

enum MemoryPadEnum {
  ADD = 'M+',
  SUBTRACT = 'M-',
  RECALL = 'MR',
  CLEAR = 'MC'
}

export default function Display() {
  const memoryPads: MemoryPadEnum[] = Object.values(MemoryPadEnum)

  return (
    <Wrapper>
      <Header>
        <CustomHistoryIcon></CustomHistoryIcon>
        <CurrentOperation>100 + 200</CurrentOperation>
      </Header>

      <Result>9462</Result>
      <CustomBackspaceIcon />

      <MemoryWrapper>
        {memoryPads.map((label) => (
          <MemoryPad key={label}>{label}</MemoryPad>
        ))}
      </MemoryWrapper>
    </Wrapper>
  )
}
