import StyledFooterWidget from './FooterWidget.styled'

type FooterWidgetProps = {
  children: React.ReactNode
  id?: string
}

const FooterWidget = ({ children, id }: FooterWidgetProps) => {
  return (
    <StyledFooterWidget>
      <div id={id}>{children}</div>
    </StyledFooterWidget>
  )
}

export default FooterWidget
