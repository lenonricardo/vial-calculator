import {
  Wrapper,
  Header,
  CustomHistoryIcon,
  Result,
  CustomBackspaceIcon
} from './styles'

interface DisplayProps {
  result: string
  onCancelEntry: () => void
}

export default function Display({ result, onCancelEntry }: DisplayProps) {
  return (
    <Wrapper>
      <Header>
        <CustomHistoryIcon></CustomHistoryIcon>
      </Header>

      <Result>{result || 0}</Result>
      <CustomBackspaceIcon onClick={() => onCancelEntry()} />
    </Wrapper>
  )
}
