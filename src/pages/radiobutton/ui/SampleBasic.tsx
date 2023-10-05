import { Stack, ChoiceGroup, IChoiceGroupOption } from '@gui/fluent-ui-allure'

const option: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' }
]

export const SampleBasic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <ChoiceGroup options={option} required={true} defaultSelectedKey={'A'} horizontal />
    </Stack>
  )
}
