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
  onShowHistory: () => void
}

export default function Display({
  result,
  onCancelEntry,
  onShowHistory
}: DisplayProps) {
  return (
    <Wrapper>
      <Header>
        <CustomHistoryIcon onClick={() => onShowHistory()}></CustomHistoryIcon>
      </Header>

      <Result>{result || 0}</Result>
      <CustomBackspaceIcon onClick={() => onCancelEntry()} />
    </Wrapper>
  )
}
