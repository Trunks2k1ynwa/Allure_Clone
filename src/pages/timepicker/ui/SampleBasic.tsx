import * as React from 'react'
import { Stack, TimePicker } from '@gui/fluent-ui-allure'
export const SampleBasic = () => {
  const [value, setValue] = React.useState<string>()
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <TimePicker
        id={'time-picker'}
        twelveHoursSystem={false}
        formatTime='HH:mm'
        placeholder='HH:mm'
        onConfirmClick={(time) => setValue(time)}
        value={value}
        allowTextInput
        onClearClick={() => {
          setValue('08:10')
        }}
      />
    </Stack>
  )
}
