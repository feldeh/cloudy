import StyledWeatherTypo from './WeatherTypo.styled'

const WeatherTypo = ({ data }: any) => {
  const weatherData = data.current.weather[0].id
  const sunnyRegex = /800/
  const cloudyRegex = /^7|8/
  const rainyRegex = /^3|5/
  const snowyRegex = /^6/
  const stormyRegex = /^2/

  if (sunnyRegex.test(weatherData.toString())) {
    return <StyledWeatherTypo>It's Sunny</StyledWeatherTypo>
  } else if (cloudyRegex.test(weatherData.toString())) {
    return <StyledWeatherTypo>It's Cloudy</StyledWeatherTypo>
  } else if (rainyRegex.test(weatherData.toString())) {
    return <StyledWeatherTypo>It's Rainy</StyledWeatherTypo>
  } else if (snowyRegex.test(weatherData.toString())) {
    return <StyledWeatherTypo>It's Snowy</StyledWeatherTypo>
  } else if (stormyRegex.test(weatherData.toString())) {
    return <StyledWeatherTypo>It's Stormy</StyledWeatherTypo>
  } else return null
}

export default WeatherTypo
