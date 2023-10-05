import { TooltipHost } from '@gui/fluent-ui-allure'
import React from 'react'

type Props = {
  children: React.ReactNode
  hover: string
  code: string
}

const Tooltip = ({ children, hover, code }: Props) => {
  const [tooltipContent, setTooltipContent] = React.useState<string>(hover)

  if (tooltipContent === 'copied') {
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
  }
  function handleCopy() {
    setTooltipContent('Copied')
    setTimeout(() => {
      setTooltipContent(hover)
    }, 800)
  }
  return (
    <TooltipHost content={tooltipContent}>
      <span onClick={handleCopy}>{children}</span>
    </TooltipHost>
  )
}

export default Tooltip
