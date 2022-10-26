import styled from '@emotion/styled'

const StyledWeatherTypo = styled.p`
  font-size: 35px;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: scale(-1) translateX(1em);
  @media (min-width: 810px) {
    font-size: 40px;
    writing-mode: horizontal-tb;
    transform: scale(1);
  }
  @media (min-width: 1200px) {
    font-size: 50px;
    transform: translateY(-45px);
  }
  margin-top: 5px;
`

export default StyledWeatherTypo
