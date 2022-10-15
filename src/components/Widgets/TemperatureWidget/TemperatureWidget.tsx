import StyledTemperatureWidget from './TemperatureWidget.styled'

type TemperatureWidgetProps = {
  children?: React.ReactNode
}

const TemperatureWidget = ({ children }: TemperatureWidgetProps) => {
  return <StyledTemperatureWidget>{children}</StyledTemperatureWidget>
}

export default TemperatureWidget
