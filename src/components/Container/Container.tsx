import StyledContainer from './Container.styled'

type ContainerProps = {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Container = ({ children, style }: ContainerProps) => {
  return <StyledContainer style={style}>{children}</StyledContainer>
}

export default Container
