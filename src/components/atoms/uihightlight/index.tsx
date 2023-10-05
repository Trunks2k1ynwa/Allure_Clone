import { memo } from 'react'
import './index.scss'
type Props = {
  children: React.ReactNode
}

const UiHighLight = memo(({ children }: Props) => {
  return <section className='ui-hightlight'>{children}</section>
})

export default UiHighLight
