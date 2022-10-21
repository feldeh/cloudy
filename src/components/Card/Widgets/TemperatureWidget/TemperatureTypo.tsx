import { StyledTemperatureTypo, StyledSpan } from './TemperatureTypo.styled'

const TemperatureTypo = ({ data }: any) => {
  return (
    <StyledTemperatureTypo>
      {Math.trunc(data.current.temp)}
      <StyledSpan fontSize={'1em'}>&#176;</StyledSpan>
    </StyledTemperatureTypo>
  )
}

export default TemperatureTypo
