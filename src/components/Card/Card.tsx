import StyledCard from './Card.styled'
import TemperatureWidget from '../Widgets/TemperatureWidget/TemperatureWidget'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
