import * as React from 'react'
import {
  Stack,
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
  SelectableOptionMenuItemType,
  DefaultButton,
  Checkbox
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

const selectAllOptions: ICheckOptionModel[] = [
  { key: ECheckOption.OptionA, value: false },
  { key: ECheckOption.OptionB, value: false },
  { key: ECheckOption.OptionC, value: false },
  { key: ECheckOption.OptionD, value: false }
]

const options = [
  { text: 'Select All', key: 'All', itemType: SelectableOptionMenuItemType.SelectAll },
  { text: 'Option A', key: '1' },
  { text: 'Option B', key: '2' },
  { text: 'Option C', key: '3' },
  { text: 'Option D', key: '4' }
]

const styles = {
  root: {
    height: 40,
    width: 280,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: 'normal'
  }
}

const buttonStyle = {
  root: {
    padding: 0,
    height: 40,
    border: 'none',
    width: '100%',
    margin: '1px',
    '&:hover': {
      background: '#f2f3f4 !important',
      borderRadius: 0
    },
    '&:focus': {
      outline: 'rgb(0, 0, 0) solid 1px !important',
      width: '278px'
    }
  }
}

const allButtonStyle = {
  root: {
    padding: 0,
    border: 'none',
    height: 40,
    width: '100%',
    margin: '1px',
    outline: '1px !important',
    '&:hover': {
      background: 'transparent !important'
    },
    '&:focus': {
      outline: 'rgb(0, 0, 0) solid 1px !important',
      width: '278px'
    }
  }
}

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: '280px !important' } }

export const SampleMultiple = () => {
  const [selectedAll, setSelectedAll] = React.useState<boolean>(false)
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])
  const [indeterminate, setIndeterminate] = React.useState(false)
  const [selectOptions, setSelectOptions] = React.useState<ICheckOptionModel[]>(selectAllOptions)

  function getSelectOptionsValue(option: ECheckOption) {
    const options = selectOptions.filter((i) => i.key === option)
    return options.length ? options[0].value : false
  }

  function changeSelectOptions(option: ECheckOption) {
    const newSelectOptions = selectOptions.map((i) => {
      if (i.key === option) {
        i.value = !i.value
      }
      return i
    })
    const length = newSelectOptions.filter((i) => i.value).length
    setIndeterminate(length >= 1 && length < 4)
    setSelectedAll(length === 4)
    setSelectOptions(newSelectOptions)
    const selectedKey = newSelectOptions.filter((i) => i.value).map((j) => `${j.key}`)
    setSelectedKeys(selectedKey)
  }

  function changeSelectedAll() {
    const value = indeterminate ? indeterminate : !selectedAll
    const options: ICheckOptionModel[] = [
      { key: ECheckOption.OptionA, value },
      { key: ECheckOption.OptionB, value },
      { key: ECheckOption.OptionC, value },
      { key: ECheckOption.OptionD, value }
    ]
    const selectedKey = options.filter((i) => i.value).map((j) => `${j.key}`)
    setSelectedAll(value)
    setIndeterminate(false)
    setSelectOptions(options)
    setSelectedKeys(selectedKey)
  }

  const onRenderOption = (option: IDropdownOption): JSX.Element => {
    const isSelectedAll = option.itemType === SelectableOptionMenuItemType.SelectAll
    return (
      <div key={option.key} tabIndex={0}>
        <DefaultButton
          styles={isSelectedAll ? allButtonStyle : buttonStyle}
          onClick={(e) => {
            isSelectedAll ? changeSelectedAll() : changeSelectOptions(Number(option.key))
            e.stopPropagation()
            e.preventDefault()
          }}
        >
          <Checkbox
            label={option.text}
            styles={styles}
            indeterminate={isSelectedAll ? indeterminate : false}
            checked={isSelectedAll ? selectedAll : getSelectOptionsValue(Number(option.key))}
            onChange={(e) => {
              isSelectedAll ? changeSelectedAll() : changeSelectOptions(Number(option.key))
              e!.stopPropagation()
              e!.preventDefault()
            }}
          />
        </DefaultButton>
      </div>
    )
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Dropdown
        options={options}
        styles={dropdownStyles}
        multiSelect
        selectedKeys={selectedKeys}
        onRenderTitle={() => (
          <div>
            {selectedKeys.length === 1
              ? options.find((i) => i.key === selectedKeys[0])?.text
              : `${selectedKeys.length} selected items`}
          </div>
        )}
        placeholder={'Select'}
        onRenderItem={onRenderOption}
      />
    </Stack>
  )
}
