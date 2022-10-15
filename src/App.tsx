import Container from './components/Container/Container'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import TemperatureWidget from './components/Widgets/TemperatureWidget/TemperatureWidget'
import TemperatureTypo from './components/Widgets/TemperatureWidget/TemperatureTypo'
import LocationTypo from './components/Widgets/TemperatureWidget/LocationTypo'

function App() {
  return (
    <Container>
      <Card>
        <TemperatureWidget>
          <LocationTypo />
          <TemperatureTypo />
        </TemperatureWidget>
      </Card>
      <Footer />
    </Container>
  )
}

export default App
