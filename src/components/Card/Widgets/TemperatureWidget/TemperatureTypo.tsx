import StyledTemperatureTypo from './TemperatureTypo.styled'

const TemperatureTypo = ({ data }: any) => {
  return (
    <StyledTemperatureTypo>
      {Math.trunc(data.current.temp)}
      <span style={{ fontSize: '1em' }}>&#176;</span>
    </StyledTemperatureTypo>
  )
}

export default TemperatureTypo
