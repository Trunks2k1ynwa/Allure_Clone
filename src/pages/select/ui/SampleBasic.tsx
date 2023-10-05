import * as React from 'react'
import { Stack, Dropdown, IDropdownStyles } from '@gui/fluent-ui-allure'

const options = [
  { text: 'Option A', key: 'A' },
  { text: 'Option B', key: 'B' },
  { text: 'Option C', key: 'C' },
  { text: 'Option D', key: 'D' }
]
const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: '280px !important' } }

export const SampleBasic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Dropdown options={options} styles={dropdownStyles} placeholder={'Choose an item'} />
    </Stack>
  )
}
