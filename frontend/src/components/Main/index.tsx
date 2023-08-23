import * as S from './styles'

const Main = ({}) => (
  <S.Wrapper>
    <S.Calculator>
      <S.Display></S.Display>
      <S.PadButtons>
        <S.NumberButtons>
          <S.SecondaryButtons>
            <S.ButtonSecondary>CE</S.ButtonSecondary>
            <S.ButtonSecondary>C</S.ButtonSecondary>
            <S.ButtonSecondary>+/-</S.ButtonSecondary>

            <S.Button>7</S.Button>
            <S.Button>8</S.Button>
            <S.Button>9</S.Button>
            <S.Button>4</S.Button>
            <S.Button>5</S.Button>
            <S.Button>6</S.Button>
            <S.Button>1</S.Button>
            <S.Button>2</S.Button>
            <S.Button>3</S.Button>
          </S.SecondaryButtons>

          <S.BottomButtons>
            <S.DoubleButton>0</S.DoubleButton>
            <S.Button>.</S.Button>
          </S.BottomButtons>
        </S.NumberButtons>

        <S.TerciaryButtons>
          <S.ButtonSecondary>%</S.ButtonSecondary>
          <S.ButtonSecondary>(</S.ButtonSecondary>
          <S.ButtonSecondary>)</S.ButtonSecondary>
          <S.ButtonSecondary>√</S.ButtonSecondary>
          <S.ButtonSecondary>x²</S.ButtonSecondary>
        </S.TerciaryButtons>

        <S.OperationButtons>
          <S.ButtonPrimary>÷</S.ButtonPrimary>
          <S.ButtonGradient1>x</S.ButtonGradient1>
          <S.ButtonGradient2>-</S.ButtonGradient2>
          <S.ButtonGradient2>+</S.ButtonGradient2>
          <S.ButtonGradient2>=</S.ButtonGradient2>
        </S.OperationButtons>
      </S.PadButtons>
    </S.Calculator>
  </S.Wrapper>
)

export default Main
