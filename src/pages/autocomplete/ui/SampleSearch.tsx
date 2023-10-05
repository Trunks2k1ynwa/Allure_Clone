import * as React from 'react'
import { Stack, AutoComplete, IAutoCompleteStyles, AutoCompleteOptions } from '@gui/fluent-ui-allure'

const expanding: AutoCompleteOptions[] = [
  {
    key: 'blue',
    text: 'Blue'
  },
  {
    key: 'black',
    text: 'Black'
  },
  {
    key: 'blue-key',
    text: 'Blue Key'
  }
]

export const SampleSearch = () => {
  const styles: Partial<IAutoCompleteStyles> = { root: { width: 280, height: 40 } }
  const [value, setValue] = React.useState<string>()
  const elementRef = React.useRef<HTMLDivElement>()

  const onSelectedItem = (i: AutoCompleteOptions) => {
    console.log('text', i.text)
    console.log('befValue', value)
    setValue(i.text)
  }

  const onChange = (i: string) => {
    console.log('value', value)
    setValue(i)
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <AutoComplete
        id='ms-icon-complete'
        calloutWidth={280}
        styles={styles}
        expanding={expanding}
        placeholder={'Input'}
        value={value}
        showIcon
        elementRef={elementRef}
        onSelectedItem={onSelectedItem}
        onChange={(e, v) => onChange(v)}
      />
    </Stack>
  )
}
