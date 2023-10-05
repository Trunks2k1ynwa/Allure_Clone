import { Stack, Toggle } from '@gui/fluent-ui-allure'
export const SampleDisabled = () => {
  return (
    <Stack horizontal verticalAlign='center' tokens={{ childrenGap: 20 }}>
      <Toggle checked disabled />
      <Toggle disabled />
      <Toggle checked disabled size='small' />
      <Toggle disabled size='small' />
    </Stack>
  )
}
