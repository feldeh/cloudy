import styled from '@emotion/styled'

const StyledFooter = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  gap: 0px;
  justify-content: space-around;
  border: 2px solid white;
  border-radius: 15px;
  margin: 15px 70px 50px;
  padding: 15px;
  font-size: 0.75em;
  @media (min-width: 410px) {
    font-size: 0.8em;
  }
  @media (min-width: 810px) {
    margin: 15px 150px 50px;
    font-size: 1em;
  }
  @media (min-width: 1200px) {
    margin: 15px 300px 50px;
  }
`
export default StyledFooter
