import { Checkbox, Stack } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <Checkbox label='check box' />
    </Stack>
  )
}
