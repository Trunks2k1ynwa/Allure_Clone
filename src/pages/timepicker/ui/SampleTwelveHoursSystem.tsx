import * as React from 'react'
import { Stack, TimePicker } from '@gui/fluent-ui-allure'
export const SampleTwelveHoursSystem = () => {
  const [value, setValue] = React.useState<string>()
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TimePicker
        id={'time-picker-am'}
        twelveHoursSystem={true}
        formatTime='HH:mm AM'
        placeholder='HH:mm AM'
        onConfirmClick={(time) => setValue(time)}
        value={value}
        onClearClick={() => {
          setValue('08:10 AM')
        }}
      />
    </Stack>
  )
}
