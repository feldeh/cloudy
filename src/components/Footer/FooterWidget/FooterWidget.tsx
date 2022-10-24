import StyledFooterWidget from './FooterWidget.styled'

type FooterWidgetProps = {
  children: React.ReactNode
  className?: string
}

const FooterWidget = ({ children, className }: FooterWidgetProps) => {
  return (
    <StyledFooterWidget>
      <div className={className}>{children}</div>
    </StyledFooterWidget>
  )
}

export default FooterWidget
