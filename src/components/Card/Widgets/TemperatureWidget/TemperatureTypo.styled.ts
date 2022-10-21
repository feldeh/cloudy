import styled from '@emotion/styled'

export interface ISpan {
  fontSize?: string | number
}

export const StyledTemperatureTypo = styled.p`
  font-size: 10em;
  line-height: 1em;
  // background-color: grey;
`

export const StyledSpan = styled.span<ISpan>`
  font-size: ${(props) => props.fontSize || '1em'};
`
