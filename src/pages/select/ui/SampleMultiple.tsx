import * as React from 'react'
import {
  Stack,
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
  PrimaryButton,
  Link,
  IStyleFunctionOrObject,
  ISearchBoxStyleProps,
  ISearchBoxStyles,
  SearchBox,
  useTheme,
  IExtendedPalette
} from '@gui/fluent-ui-allure'

enum ECheckOption {
  OptionA = 1,
  OptionB = 2,
  OptionC = 3,
  OptionD = 4
}

interface ICheckOptionModel {
  key?: ECheckOption
  value?: boolean
}

const options = [
  { text: 'Option A', key: '1' },
  { text: 'Option B', key: '2' },
  { text: 'Option C', key: '3' },
  { text: 'Option D', key: '4' }
]

export const SampleMultipleAll = () => {
  const palette = useTheme().palette as IExtendedPalette
  const bottomButtonStyle: React.CSSProperties = {
    padding: '16px 12px',
    borderTop: `1px solid ${palette.gray2}`,
    textAlign: 'right'
  }

  const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: '280px !important' } }

  const outStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    background: palette.white
  }

  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = React.useState<string[]>([])
  const [value, setValue] = React.useState<string | undefined>('')
  const [newOptions, setNewOptions] = React.useState<IDropdownOption[]>(options)
  const [key, setKey] = React.useState<Date>(new Date())

  const searchStyles: IStyleFunctionOrObject<ISearchBoxStyleProps, ISearchBoxStyles> = {
    box: {
      width: 256,
      '.ms-SearchBox': {
        height: 32
      }
    },
    iconButton: {
      top: 5
    }
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Dropdown
        options={newOptions}
        styles={dropdownStyles}
        multiSelect
        selectedKeys={selectedKeys}
        onRenderTitle={(_t) => (
          <div>
            {selectedKeys.length === 1
              ? options.find((i) => i.key === selectedKeys[0])?.text
              : `${selectedKeys.length} selected items`}
          </div>
        )}
        placeholder={'Select'}
        key={`${key}`}
        onDismiss={() => {
          setValue('')
          setNewOptions(options)
          setSelectedKeys(defaultSelectedKeys)
        }}
        onRenderList={(defaultProps, defaultRender) => {
          return (
            <div>
              <div style={outStyle}>
                <SearchBox
                  styles={searchStyles}
                  onChange={(_e, v) => {
                    const currentOptions = options.filter(
                      (option) => option.text?.toLocaleLowerCase()?.includes(v!.toLocaleLowerCase())
                    )
                    setNewOptions(currentOptions)
                    setValue(v)
                  }}
                  placeholder={'Search...'}
                  id={'search-option'}
                  value={value}
                  onClear={() => {
                    setNewOptions(options)
                    setValue('')
                  }}
                />
              </div>
              {defaultRender(defaultProps)}

              <div style={bottomButtonStyle}>
                <Link
                  styles={{ root: { marginRight: 24 } }}
                  onClick={() => {
                    setSelectedKeys([])
                    setValue('')
                    setNewOptions(options)
                  }}
                >
                  Clear
                </Link>
                <PrimaryButton
                  text='Apply'
                  styles={{ root: { minWidth: 65, height: 40 } }}
                  onClick={() => {
                    setKey(new Date())
                    setValue('')
                    setNewOptions(options)
                    setDefaultSelectedKeys(selectedKeys)
                  }}
                />
              </div>
            </div>
          )
        }}
        onChange={(_e, option) => {
          const newOptions = selectedKeys.filter((i) => i !== option!.key)
          option!.selected && newOptions.push(option!.key as string)
          setSelectedKeys(newOptions)
        }}
        onClick={() => {
          setTimeout(() => {
            document.getElementById('search-option')?.blur()
          }, 70)
          setSelectedKeys(defaultSelectedKeys)
        }}
      />
    </Stack>
  )
}
