import StyledBackground from './Background.styled'

type BackgroundProps = {
  children?: React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  return <StyledBackground>{children}</StyledBackground>
}

export default Background
