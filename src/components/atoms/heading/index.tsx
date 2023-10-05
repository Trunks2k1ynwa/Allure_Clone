import React from 'react'
import './index.scss'
type Props = {
  children: React.ReactNode
  type?: 'heading' | 'subheading'
}

const Heading = ({ children, type = 'heading' }: Props) => {
  return <div className={`${type === 'heading' ? 'heading' : 'subheading'}`}>{children}</div>
}

export default Heading
