import Container from './components/Container/Container'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import TemperatureWidget from './components/Card/Widgets/TemperatureWidget/TemperatureWidget'
import TemperatureTypo from './components/Card/Widgets/TemperatureWidget/TemperatureTypo'
import LocationTypo from './components/Card/Widgets/TemperatureWidget/LocationTypo'
import WeatherWidget from './components/Card/Widgets/WeatherWidget/WeatherWidget'
import WeatherTypo from './components/Card/Widgets/WeatherWidget/WeatherTypo'
import { Global } from '@emotion/react'
import GlobalStyles from './components/GlobalStyles'
import Search from './components/Search/Search'
import { WEATHER_API_PROXY_URL } from './api'
import { useEffect, useState } from 'react'
import IWeatherData from './interfaces/IWeatherData'
import { ISearchData } from './interfaces/ISearchData'
import StyledSearch from './components/Search/Search.styled'

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData>()

  const [imgName, setImgName] = useState('')

  const handleOnSearchChange = (searchData: ISearchData) => {
    const [lat, lon] = searchData.value.split(' ')

    async function currentWeatherFetch() {
      fetch(`${WEATHER_API_PROXY_URL}?lat=${lat}&lon=${lon}&units=metric`)
        .then(async (response) => {
          const weatherResponse = await response.json()

          const weatherData = weatherResponse.current.weather[0].id
          const sunnyRegex = /800/
          const cloudyRegex = /^7|8/
          const rainyRegex = /^3|5/
          const snowyRegex = /^6/
          const stormyRegex = /^2/
          if (sunnyRegex.test(weatherData.toString())) {
            setImgName('sun')
          } else if (cloudyRegex.test(weatherData.toString())) {
            setImgName('cloud')
          } else if (rainyRegex.test(weatherData.toString())) {
            setImgName('rain')
          } else if (snowyRegex.test(weatherData.toString())) {
            setImgName('snow')
          } else if (stormyRegex.test(weatherData.toString())) {
            setImgName('storm')
          }
          setCurrentWeather({
            city: searchData.label.slice(0, searchData.label.length - 4),
            ...weatherResponse,
          })
        })
        .catch((err) => console.log(err))
    }
    currentWeatherFetch()
  }

  useEffect(() => {
    handleOnSearchChange({
      value: '50.846 4.352',
      label: 'Brussels, BE',
    })
  }, [])

  useEffect(() => {
    imgName !== '' &&
      (document.body.style.background = `url(./${imgName}.jpg) no-repeat center/cover`)
  }, [imgName])

  console.log('currentWeather')
  console.log(currentWeather)

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <StyledSearch>
          <Search onSearchChange={handleOnSearchChange} />
        </StyledSearch>
        <Card>
          <TemperatureWidget>
            {currentWeather && <LocationTypo data={currentWeather} />}
            {currentWeather && <TemperatureTypo data={currentWeather} />}
          </TemperatureWidget>
          <WeatherWidget>
            {currentWeather && <WeatherTypo data={currentWeather} />}
          </WeatherWidget>
        </Card>
        {currentWeather && <Footer data={currentWeather} />}
      </Container>
    </>
  )
}

export default App
