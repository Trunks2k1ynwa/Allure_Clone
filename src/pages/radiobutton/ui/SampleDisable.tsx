import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react'
import { Stack } from '@gui/fluent-ui-allure'

const option2: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' }
]

export const SampleDisable = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <ChoiceGroup options={option2} required={true} defaultSelectedKey={'A'} disabled />
    </Stack>
  )
}
