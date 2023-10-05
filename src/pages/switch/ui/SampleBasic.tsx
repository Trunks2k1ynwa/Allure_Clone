import { Toggle } from '@fluentui/react'
import { Stack } from '@gui/fluent-ui-allure'
import * as React from 'react'

export const SampleBasic = () => {
  const [largeChecked, setLargeChecked] = React.useState<boolean | undefined>(true)
  const [smallChecked, setSmallChecked] = React.useState<boolean | undefined>(true)
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 20 }}>
      <Toggle
        checked={largeChecked}
        onChange={(_, checked) => {
          setLargeChecked(checked)
        }}
      />
      <Toggle
        checked={smallChecked}
        onChange={(_, checked) => {
          setSmallChecked(checked)
        }}
        size='small'
      />
    </Stack>
  )
}
