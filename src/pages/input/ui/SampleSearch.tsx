import { ISearchBoxStyles, SearchBox, Stack } from '@gui/fluent-ui-allure'
import React from 'react'

export const SampleSearch = () => {
  const styles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: 240 } }
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { height: 32 },
    box: { width: 240 },
    iconButton: { top: 4 }
  }
  const [value, setValue] = React.useState<string | undefined>('')
  const [firstSearchValue, setFirstSearchValue] = React.useState<string | undefined>('')
  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <Stack>
        <SearchBox
          styles={styles}
          placeholder='Search...'
          value={firstSearchValue}
          onSearch={(v) => console.log(v)}
          onChange={(_ev, v) => setFirstSearchValue(v)}
        />
      </Stack>
      <Stack>
        <SearchBox styles={searchBoxStyles} placeholder='Search...' value={value} onChange={(_ev, v) => setValue(v)} />
      </Stack>
      <Stack>
        <SearchBox styles={searchBoxStyles} showIcon placeholder='Search...' />
      </Stack>
    </Stack>
  )
}
