import styled from '@emotion/styled'

const StyledFooterWidget = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  // background-color: red;
  min-width: calc(100% / 3);

  p:first-of-type {
    font-weight: bold;
    font-size: 1.2em;
  }
  #footer-widget {
    border-right: 1px solid rgba(255, 255, 255, 0.4);
  }
`
export default StyledFooterWidget
