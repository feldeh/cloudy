import IWeatherData from '../../interfaces/IWeatherData'
import StyledFooter from './Footer.styled'
import FooterWidget from './FooterWidget/FooterWidget'

type FooterProps = {
  data: IWeatherData
}

const Footer = ({ data }: FooterProps) => {
  return (
    <StyledFooter>
      <FooterWidget>
        <p>
          <>{data.current.humidity}%</>
        </p>
        <p>Humidity</p>
      </FooterWidget>
      <FooterWidget className="footer-widget">
        <p>
          <>{data.current.pressure} mbar</>
        </p>
        <p>Pressure</p>
      </FooterWidget>
      <FooterWidget>
        <p>
          <>{data.current.uvi}</>
        </p>
        <p>UV index</p>
      </FooterWidget>
    </StyledFooter>
  )
}

export default Footer
