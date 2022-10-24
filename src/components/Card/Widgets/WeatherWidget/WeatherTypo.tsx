import IWeatherData from '../../../../interfaces/IWeatherData'
import StyledWeatherTypo from './WeatherTypo.styled'

const WeatherTypo = ({ data }: any) => {
  const weatherData = data.current.weather[0].id
  const sunnyRegex = /800/
  const cloudyRegex = /^7|8/
  const rainyRegex = /^3|5/
  const snowyRegex = /^6/
  const stormyRegex = /^2/

  if (sunnyRegex.test(weatherData.toString())) {
    return (
      <StyledWeatherTypo>
        <div>It's Sunny</div>
      </StyledWeatherTypo>
    )
  } else if (cloudyRegex.test(weatherData.toString())) {
    return (
      <StyledWeatherTypo>
        <div>It's Cloudy</div>
      </StyledWeatherTypo>
    )
  } else if (rainyRegex.test(weatherData.toString())) {
    return (
      <StyledWeatherTypo>
        <div>It's Rainy</div>
      </StyledWeatherTypo>
    )
  } else if (snowyRegex.test(weatherData.toString())) {
    return (
      <StyledWeatherTypo>
        <div>It's Snowy</div>
      </StyledWeatherTypo>
    )
  } else if (stormyRegex.test(weatherData.toString())) {
    return (
      <StyledWeatherTypo>
        <div>It's Stormy</div>
      </StyledWeatherTypo>
    )
  } else return null
}

export default WeatherTypo
