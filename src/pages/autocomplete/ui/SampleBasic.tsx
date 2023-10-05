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

export const SampleBasic = () => {
  const styles: Partial<IAutoCompleteStyles> = { root: { width: 280, height: 40 } }
  const [value, setValue] = React.useState<string>()
  const elementRef = React.useRef<HTMLDivElement>()
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <AutoComplete
        id={'ms-basic-complete'}
        calloutWidth={280}
        styles={styles}
        elementRef={elementRef}
        expanding={expanding}
        placeholder={'Input'}
        value={value}
        onSelectedItem={(i) => setValue(i.text)}
        onChange={(e, v) => setValue(v)}
      />
    </Stack>
  )
}
