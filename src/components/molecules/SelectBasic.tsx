import { Stack, Dropdown, IDropdownStyles, IDropdownOption } from '@gui/fluent-ui-allure'
import { useAppDispatch } from '@hooks/ReduxHooks'
import { setTheme, theme } from '@redux/slices/themeSlice'
import { FormEvent } from 'react'

type Props = {
  width?: string
  options: theme[]
}

const SelectBasic = ({ width = '200px !important', options }: Props) => {
  const dispatch = useAppDispatch()
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: width || '200px !important', fontStyle: 'oblique !important' }
  }

  const handleGetTheme = (_e: FormEvent<HTMLDivElement>, option: IDropdownOption<any> | undefined | theme) => {
    dispatch(setTheme(option))
  }
  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Dropdown
        onChange={handleGetTheme}
        id='select'
        options={options}
        styles={dropdownStyles}
        placeholder={options[0].text}
      />
    </Stack>
  )
}

export default SelectBasic
