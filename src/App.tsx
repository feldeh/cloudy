import Container from './components/Container/Container'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import TemperatureWidget from './components/Widgets/TemperatureWidget/TemperatureWidget'
import TemperatureTypo from './components/Widgets/TemperatureWidget/TemperatureTypo'
import LocationTypo from './components/Widgets/TemperatureWidget/LocationTypo'
import WeatherWidget from './components/Widgets/WeatherWidget/WeatherWidget'
import WeatherTypo from './components/Widgets/WeatherWidget/WeatherTypo'

function App() {
  return (
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
  )
}

export default App
