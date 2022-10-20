import StyledWeatherTypo from './WeatherTypo.styled'

const WeatherTypo = ({ data }: any) => {
  return (
    <StyledWeatherTypo>{data.current.weather[0].description}</StyledWeatherTypo>
  )
}

export default WeatherTypo
