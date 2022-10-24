import styled from '@emotion/styled'

const Card = styled.div`
  // background-color: rgba(140, 140, 140, 0.5);
  // border: solid 1px rgba(255, 255, 255);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: -180px 60px 50px 60px;
  @media (min-width: 810px) {
    margin: -180px 150px 50px 150px;
  }
  @media (min-width: 1025px) {
    margin: -180px 320px 50px 320px;
  }
`

export default Card
