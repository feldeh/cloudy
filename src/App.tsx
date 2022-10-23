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
import { useState } from 'react'
import IWeatherData from './interfaces/IWeatherData'
import { ISearchData } from './interfaces/ISearchData'

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<IWeatherData>()

  const handleOnSearchChange = (searchData: ISearchData) => {
    const [lat, lon] = searchData.value.split(' ')

    async function currentWeatherFetch() {
      fetch(`${WEATHER_API_PROXY_URL}?lat=${lat}&lon=${lon}&units=metric`)
        .then(async (response) => {
          const weatherResponse = await response.json()

          setCurrentWeather({
            city: searchData.label.slice(0, searchData.label.length - 4),
            ...weatherResponse,
          })
        })
        .catch((err) => console.log(err))
    }
    currentWeatherFetch()
  }

  console.log('currentWeather')
  console.log(currentWeather)

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Search onSearchChange={handleOnSearchChange} />
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
