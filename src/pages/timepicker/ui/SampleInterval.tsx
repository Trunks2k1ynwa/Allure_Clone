import * as React from 'react'
import { Stack, TimePicker } from '@gui/fluent-ui-allure'

export const SampleInterval = () => {
  const [value, setValue] = React.useState<string>()
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TimePicker
        id={'time-interval-picker'}
        twelveHoursSystem={true}
        onConfirmClick={(time) => setValue(time)}
        value={value}
        allowTextInput
        fiveMinutesInterval
      />
    </Stack>
  )
}
