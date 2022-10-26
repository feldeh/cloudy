import styled from '@emotion/styled'

const Card = styled.div`
  // background-color: rgba(140, 140, 140, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: -180px 50px 50px 50px;
  @media (min-width: 810px) {
    margin: -180px 150px 50px 150px;
  }
  @media (min-width: 1200px) {
    margin: -180px 300px 50px 300px;
  }
`

export default Card
