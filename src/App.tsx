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

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(' ')

    async function currentWeatherFetch() {
      fetch(`${WEATHER_API_PROXY_URL}?lat=${lat}&lon=${lon}`)
        .then(async (response) => {
          const weatherResponse = await response.json()

          setCurrentWeather({ city: searchData.label, ...weatherResponse })
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
            <LocationTypo />
            <TemperatureTypo />
          </TemperatureWidget>
          <WeatherWidget>
            <WeatherTypo />
          </WeatherWidget>
        </Card>
        <Footer />
      </Container>
    </>
  )
}

export default App
