import * as React from 'react'
import { DefaultButton, TooltipHost, Stack } from '@gui/fluent-ui-allure'

export const Sample = () => {
  const [tooltipContent, setTooltipContent] = React.useState<string>('')

  function onTooltipToggle(visible: boolean) {
    if (!visible) {
      setTooltipContent('')
    }
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TooltipHost
        content={
          <div>
            This is <br /> tooltip.
          </div>
        }
      >
        <DefaultButton>Hover me</DefaultButton>
      </TooltipHost>

      <TooltipHost content='This is tooltip.'>
        <DefaultButton disabled>Hover this disabled button</DefaultButton>
      </TooltipHost>

      <TooltipHost onTooltipToggle={(visible) => onTooltipToggle(visible)} content={tooltipContent}>
        <DefaultButton onClick={() => setTooltipContent('This is tooltip.')}>Click me</DefaultButton>
      </TooltipHost>
    </Stack>
  )
}
