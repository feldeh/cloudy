import styled from '@emotion/styled'

const StyledTemperatureWidget = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 200px;
  @media (min-width: 810px) {
    font-size: 1.1em;
  }
  @media (min-width: 1200px) {
    font-size: 1.5em;
  }
`

export default StyledTemperatureWidget
