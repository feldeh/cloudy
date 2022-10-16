import StyledCard from './Card.styled'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>
}

export default Card
