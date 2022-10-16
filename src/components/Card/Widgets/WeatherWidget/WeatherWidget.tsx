import StyledWeatherWidget from './WeatherWidget.style'

type WeatherWidgetProps = {
  children: React.ReactNode
}

const WeatherWidget = ({ children }: WeatherWidgetProps) => {
  return <StyledWeatherWidget>{children}</StyledWeatherWidget>
}

export default WeatherWidget
