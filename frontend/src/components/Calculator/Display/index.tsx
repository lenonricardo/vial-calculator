import {
  Wrapper,
  Header,
  CustomHistoryIcon,
  Result,
  CustomBackspaceIcon
} from './styles'

type DisplayProps = {
  result: string
}

export default function Display(props: DisplayProps) {
  return (
    <Wrapper>
      <Header>
        <CustomHistoryIcon></CustomHistoryIcon>
      </Header>

      <Result>{props.result || 0}</Result>
      <CustomBackspaceIcon />
    </Wrapper>
  )
}
