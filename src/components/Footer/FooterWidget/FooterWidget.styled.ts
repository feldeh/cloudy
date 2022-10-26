import styled from '@emotion/styled'

const StyledFooterWidget = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-width: calc(100% / 3);
  padding: 0px 5px;

  p:first-of-type {
    font-weight: bold;
    font-size: 1.2em;
  }
  .footer-widget {
    border-right: 2px solid rgba(255, 255, 255, 0.4);
    border-left: 2px solid rgba(255, 255, 255, 0.4);
    padding: 0px 10px;
  }
`
export default StyledFooterWidget
