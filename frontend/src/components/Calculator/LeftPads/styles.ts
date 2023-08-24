import styled from 'styled-components'

export const Pad = styled.div`
  width: var(--pad-width);
  height: var(--pad-height);
  color: var(--font-pads);
  display: flex;
  font-size: var(--default-font-size);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
`

export const PadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BottomPads = styled.div`
  display: flex;
  flex-direction: row;
`

export const Pads = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(90px, 1fr));
  width: calc(450px - 90px - 90px);
  max-height: calc(450px - 90px);
`

export const TopPad = styled(Pad)`
  background-color: var(--secondary-operations);
`

export const DoublePad = styled(Pad)`
  width: calc(var(--pad-width) * 2);
`
