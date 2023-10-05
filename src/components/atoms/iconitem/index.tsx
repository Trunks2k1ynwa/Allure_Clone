import('./index.scss')
type Props = {
  children: React.ReactNode
  text: string
  onClick?: any
}
const IconItem = ({ text, children, onClick }: Props) => {
  return (
    <section onClick={onClick} className='icon-wrapper'>
      <div className='icon-wrapper_name'>{children}</div>
      <div className='icon-wrapper_text'>
        <span>{text}</span>
      </div>
    </section>
  )
}

export default IconItem
