import { ChoiceGroup } from '@fluentui/react'
import { IChoiceGroupOption, Stack } from '@gui/fluent-ui-allure'

const option3: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' }
]

export const SampleVertical = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <ChoiceGroup options={option3} required={true} defaultSelectedKey={'A'} />
    </Stack>
  )
}
