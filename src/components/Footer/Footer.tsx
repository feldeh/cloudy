import StyledFooter from './Footer.styled'
import FooterWidget from './FooterWidget/FooterWidget'

const Footer = ({ data }: any) => {
  return (
    <StyledFooter>
      <FooterWidget id="footer-widget">
        <p>{data.current.humidity}%</p>
        <p>Humidity</p>
      </FooterWidget>
      <FooterWidget id="footer-widget">
        <p>{data.current.visibility / 1000}km</p>
        <p>Visibility</p>
      </FooterWidget>
      <FooterWidget>
        <p>{data.current.uvi}</p>
        <p>UV index</p>
      </FooterWidget>
    </StyledFooter>
  )
}

export default Footer
