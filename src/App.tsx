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

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
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
