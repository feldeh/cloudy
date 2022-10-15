import StyledTemperatureTypo from './TemperatureTypo.styled'

const TemperatureTypo = () => {
  return (
    <StyledTemperatureTypo>
      <p>
        31<span style={{ fontSize: '1em' }}>&#176;</span>
      </p>
    </StyledTemperatureTypo>
  )
}

export default TemperatureTypo
