import StyledFooter from './Footer.styled'
import FooterWidget from './FooterWidget/FooterWidget'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWidget id="footer-widget">
        <p>78%</p>
        <p>Humidity</p>
      </FooterWidget>
      <FooterWidget id="footer-widget">
        <p>11km</p>
        <p>Visibility</p>
      </FooterWidget>
      <FooterWidget>
        <p>Low 0</p>
        <p>UV index</p>
      </FooterWidget>
    </StyledFooter>
  )
}

export default Footer
