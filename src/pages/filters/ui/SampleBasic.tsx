import * as React from 'react'

import {
  DefaultButton,
  Link,
  IChoiceGroupOption,
  SearchBox,
  Checkbox,
  Stack,
  Icon,
  ChoiceGroup,
  IStackStyles,
  TextField,
  ShimmeredDetailsList,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  CheckboxVisibility,
  PrimaryButton,
  Callout,
  DirectionalHint,
  FontIcon,
  Dialog,
  DialogFooter,
  useTheme,
  IExtendedPalette
} from '@gui/fluent-ui-allure'

interface IFilterItem {
  id: string
  title: string
  type: EFilterItemType
  options?: IFilterOption[]
  selectedKey?: string
  start?: Date
  end?: Date
  textValue?: string
}

enum EFilterItemType {
  Checkbox = 0,
  Radio = 1,
  DateRange = 2,
  Text = 3
}

interface IFilterOption {
  key: string
  label: string
  checked?: boolean
}

type TCheckedFilterItem = string | number

type TCheckedFilterGroup = {
  [id: string]: TCheckedFilterItem[]
}

const itemArray: IFilterItem[] = [
  {
    id: '1',
    title: 'Status',
    type: EFilterItemType.Radio,
    options: [
      {
        key: 'all',
        label: 'All'
      },
      {
        key: '2',
        label: 'Running'
      },
      {
        key: '3',
        label: 'Pending'
      }
    ],
    selectedKey: 'all'
  },
  {
    id: '2',
    title: 'Types',
    type: EFilterItemType.Checkbox,
    options: [
      {
        key: '1',
        label: 'Member',
        checked: false
      },
      {
        key: '2',
        label: 'Owner',
        checked: false
      }
    ]
  }
]

interface itemProps {
  name: string
  types: string
  status: string
  date: string
}

const columnArray: IFilterOption[] = [
  {
    key: 'name',
    label: 'Name',
    checked: true
  },
  {
    key: 'types',
    label: 'Types',
    checked: true
  },
  {
    key: 'status',
    label: 'Status',
    checked: true
  },
  {
    key: 'date',
    label: 'Date',
    checked: true
  }
]

const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
  const _index: string = `${index + 1}`.padStart(3, '0')
  return {
    key: `${_index}`,
    name: `name${_index}`,
    types: `types${_index}`,
    status: `status${_index}`,
    date: `date${_index}`
  }
})

const profiles: IProfileOption[] = [
  { key: Math.random(), text: 'Default view', default: true },
  { key: Math.random(), text: 'Custom view', checked: true },
  { key: Math.random(), text: 'Custom view2' }
]

interface ITag {
  tag: string
  id: string
  selectedKey: string | number | Date
  type: EFilterItemType
}

export const SampleBasic = () => {
  const [checkedFilterGroup, setCheckFilterGroup] = React.useState<TCheckedFilterGroup>()
  const [columnsChecked, setColumnsChecked] = React.useState<Array<string>>()
  const [totalColumns, setTotalColumns] = React.useState<IFilterOption[]>(columnArray)
  const [filterItems, setFilterItems] = React.useState<IFilterItem[]>(itemArray)
  const [totalItems, setTotalItems] = React.useState<itemProps[]>(items)
  const [searchText, setSearchText] = React.useState<string>('')
  const [filterTags, setFilterTags] = React.useState<Array<ITag>>([])
  const palette = useTheme().palette as IExtendedPalette
  const pageStyles: IStackStyles = {
    root: {
      '.ms-DetailsRow': {
        borderBottom: '1px solid #f3f2f1'
      },

      '.ms-detailsList-item-wrap': {
        padding: '10px 0',

        '.ms-detailsList-status-wrap': {
          display: 'flex',
          alignItems: 'center',

          '.ms-detailsList-status-tip': {
            width: '6px',
            height: '6px',
            marginRight: '4px',
            backgroundColor: 'green',
            borderRadius: '50%'
          }
        },

        '.ms-detailsList-name-tooltip': {
          display: 'inline-block'
        },

        '.ms-detailsList-link-data': {
          fontSize: '14px'
        }
      },

      '.ms-commandBar-wrap': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${palette.gray2}`,
        padding: '12px 0',
        marginTop: '10px',

        '.ms-CommandBar': {
          padding: '12px 16px',
          backgroundColor: 'transparent',
          alignItems: 'center',

          '.ms-commandBar-item-wrap': {
            marginRight: '8px'
          }
        }
      }
    }
  }

  const columns: IColumn[] = React.useMemo(
    () =>
      totalColumns
        .filter((col) => col.checked)
        .map((col) => ({ key: col.key, name: col.label }))
        .map((col) => ({
          ...col,
          minWidth: 150,
          isResizable: true,
          maxWidth: 200
        })),
    [totalColumns]
  )

  const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (
    item,
    _index,
    column
  ) => {
    switch (column.key) {
      case 'name':
        return (
          <div className='ms-detailsList-item-wrap'>
            <TooltipHost
              calloutProps={{ gapSpace: 0 }}
              closeDelay={10}
              content={item.name}
              hostClassName='ms-detailsList-name-tooltip'
            >
              <HeadingText type={HeadingType.DefaultBold} block>
                {item.name}
              </HeadingText>
            </TooltipHost>
          </div>
        )
      case 'types':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Text block>{item.types}</Text>
          </div>
        )
      case 'status':
        return (
          <div className='ms-detailsList-item-wrap'>
            <div className='ms-detailsList-status-wrap'>
              <div className='ms-detailsList-status-tip'></div>
              <Text block>{item.status}</Text>
            </div>
          </div>
        )
      case 'date':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Text block>{item.date}</Text>
          </div>
        )
      default:
        return <div></div>
    }
  }

  const onSearchData = React.useCallback((newSearchText: string) => {
    setSearchText(newSearchText)

    setTotalItems(items.filter((item) => new RegExp(`${newSearchText}`, 'i').test(item.name)))
  }, [])

  const onSaveFilters = React.useCallback(
    (checkedGroup: TCheckedFilterGroup) => {
      setCheckFilterGroup(checkedGroup)
      const tags: ITag[] = []
      Object.keys(checkedGroup).forEach((key) => {
        const item = filterItems.find((item) => item.id === key)
        switch (item!.type) {
          case EFilterItemType.Checkbox:
          case EFilterItemType.Radio:
            checkedGroup[key].forEach((checkedKey) => {
              const tag = `${item!.title}: ${item.options.find((option) => option!.key === checkedKey).label}`
              tags.push({ id: item!.id, selectedKey: checkedKey, tag, type: item!.type })
            })
            break
        }
      })
      setFilterItems((preItems) => {
        return preItems.map((item) => ({
          ...item,
          options: item.options?.map((option) => {
            return {
              ...option,
              checked: checkedGroup[item.id]?.includes(option.key) ? true : false
            }
          }),
          selectedKey: checkedGroup[item.id]?.length > 0 ? (checkedGroup[item.id][0] as string) : 'all'
        }))
      })
      setFilterTags(tags)
    },
    [filterItems]
  )

  const updateData = (columnsChecked?: Array<string>): void => {
    setColumnsChecked(columnsChecked)
    if (columnsChecked) {
      setTotalColumns((preColumns) => {
        const newColumns = preColumns.map((preColumn) => {
          return {
            ...preColumn,
            checked: columnsChecked.includes(preColumn.key)
          }
        })
        return newColumns
      })
      // dispatch(setColumnSelected(columnSelections));
    }
  }

  const updateDefaultView = (
    callback: (search: string, checkedFilters: TCheckedFilterGroup, checkedColumns: Array<string>) => void
  ): void => {
    callback(searchText, checkedFilterGroup, columnsChecked)
  }

  const updateFilterTags = (tag: ITag) => {
    setFilterItems((preItems) => {
      const newItems = [...preItems]
      const item = newItems.find((preItem) => preItem.id === tag.id)
      switch (item.type) {
        case EFilterItemType.Checkbox:
          item.options = item.options.map((option) => {
            return {
              ...option,
              checked: option.key === tag.selectedKey ? false : option.checked
            }
          })
          break
        case EFilterItemType.Radio:
        case EFilterItemType.DateRange:
          item.selectedKey = 'all'
          break
        case EFilterItemType.Text:
          item.textValue = ''
          break
      }

      return newItems
    })
  }

  return (
    <Stack styles={pageStyles}>
      <Stack
        horizontal
        horizontalAlign='space-between'
        verticalAlign='center'
        className='ms-detailsList-header'
        style={{ marginBottom: 20 }}
      >
        <Stack horizontal horizontalAlign='start' verticalAlign='center' grow>
          <SearchBox
            styles={{ root: { height: 32 }, box: { width: 240 }, iconButton: { top: 8 } }}
            showIcon
            placeholder='Search...'
            onSearch={onSearchData}
            onClear={() => setTotalItems([...items])}
          />
        </Stack>
        <Stack horizontal horizontalAlign='end' verticalAlign='center' tokens={{ childrenGap: 8 }}>
          <Filters items={filterItems} onSave={onSaveFilters} />
          <ManageTableColumns
            columns={totalColumns}
            searchBoxVisible={true}
            disabledUnselectedColumn='name'
            updateData={updateData}
          />
          <DefaultView profiles={profiles} updateData={updateDefaultView}></DefaultView>
        </Stack>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 10 }} style={{ marginBottom: 10 }}>
        <FilterTags tags={filterTags} updateData={updateFilterTags} />
      </Stack>
      <ShimmeredDetailsList
        compact
        checkboxVisibility={CheckboxVisibility.hidden}
        key={'detailsList'}
        setKey={'detailsList'}
        columns={columns}
        items={totalItems}
        onRenderItemColumn={onRenderItemColumn}
      ></ShimmeredDetailsList>
    </Stack>
  )
}

interface IFilterTagsProps {
  targetId?: string
  tags?: Array<ITag>
  updateData: (tag: ITag) => void
}

const FilterTags: React.FunctionComponent<IFilterTagsProps> = (props: IFilterTagsProps) => {
  const { targetId, tags, updateData } = props
  const [filterTags, setFilterTags] = React.useState<Array<ITag>>([])
  const [calloutVisible, setCalloutVisible] = React.useState(false)
  const palette = useTheme().palette as IExtendedPalette
  React.useEffect(() => {
    setFilterTags(tags)
  }, [tags])

  const removeTag = (tag: ITag) => {
    setFilterTags((previousTags) => {
      const index = previousTags.findIndex((preTag) => preTag.id === tag.id && preTag.selectedKey === tag.selectedKey)
      previousTags.splice(index, 1)
      return previousTags
    })
    updateData(tag)
  }

  return (
    <Stack horizontal tokens={{ childrenGap: 3 }}>
      {filterTags.length > 0 &&
        filterTags.map((item, index) => {
          return (
            index < 5 && (
              <DefaultButton
                key={index}
                text={item.tag}
                title={item.tag}
                styles={{
                  root: {
                    padding: 4,
                    backgroundColor: palette.gray1,
                    borderRadius: 4,
                    height: 24
                  },
                  label: {
                    maxWidth: 180,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    lineHeight: '1.5',
                    font: 'normal normal normal 13px/18px Open Sans',
                    color: palette.slate,
                    letterSpacing: '-0.2px',
                    cursor: 'text'
                  }
                }}
                menuIconProps={{
                  iconName: 'fas-xmark',
                  onClick: () => {
                    removeTag(item)
                  }
                }}
              />
            )
          )
        })}
      {filterTags.length > 5 && (
        <Link
          onClick={() => setCalloutVisible(!calloutVisible)}
          id={targetId || 'filterTags'}
          style={{ font: 'normal normal 600 14px/19px Open Sans', color: palette.themePrimary, letterSpacing: 0 }}
        >{`${filterTags.length - 5} more`}</Link>
      )}

      {calloutVisible && (
        <Callout
          styles={{
            root: {
              '.ms-Callout-beak': {
                height: 0
              },

              '.ms-Callout-main': {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: 280,
                maxHeight: '499px !important'
              }
            }
          }}
          target={`#${targetId || 'filterTags'}`}
          isBeakVisible
          directionalHint={DirectionalHint.bottomRightEdge}
          gapSpace={5}
          onDismiss={() => setCalloutVisible(false)}
          setInitialFocus
        >
          <div style={{ maxHeight: 250, overflowY: 'auto', width: '100%' }}>
            <Stack tokens={{ childrenGap: 5 }}>
              {filterTags.map((item, index) => {
                return (
                  index >= 5 && (
                    <DefaultButton
                      key={index}
                      text={item.tag}
                      title={item.tag}
                      styles={{
                        root: {
                          padding: 4,
                          backgroundColor: palette.gray1,
                          borderRadius: 4,
                          margin: 3
                        },
                        label: {
                          maxWidth: 180,
                          height: 24,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          lineHeight: '1.5',
                          font: 'normal normal normal 13px/18px Open Sans',
                          color: palette.slate,
                          letterSpacing: '-0.2px',
                          cursor: 'text',
                          textAlign: 'left'
                        }
                      }}
                      menuIconProps={{
                        iconName: 'fas-xmark',
                        onClick: () => {
                          removeTag(item)
                        }
                      }}
                    />
                  )
                )
              })}
            </Stack>
          </div>
        </Callout>
      )}
    </Stack>
  )
}

interface IFilterProps {
  items: IFilterItem[]
  onSave: (filters: TCheckedFilterGroup) => void
  targetId?: string
}
const Filters: React.FunctionComponent<IFilterProps> = (props: IFilterProps) => {
  const { items, targetId, onSave } = props
  const [filterItems, setFilterItems] = React.useState<IFilterItem[]>([])
  const [calloutVisible, setCalloutVisible] = React.useState(false)
  const [checkedFilterCount, setCheckedFilterCount] = React.useState<number>(0)
  const palette = useTheme().palette as IExtendedPalette
  React.useEffect(() => {
    setFilterItems(items)

    getCheckedFilterItems([...items])
  }, [items])

  const onCheckboxChanged = (item: IFilterItem, checkbox: IFilterOption, checked?: boolean) => {
    checkbox.checked = !!checked
    setFilterItems((previousItems) => {
      const newItems = previousItems.map((previousItem) => {
        if (previousItem.id === item.id) {
          return {
            ...previousItem,
            options: item.options
          }
        }
        return previousItem
      })
      return newItems
    })
  }

  const renderCheckbox = React.useCallback(
    (item: IFilterItem): React.ReactNode => {
      return (
        <Stack key={item.id} style={{ padding: 16, borderBottom: `1px solid ${palette.gray2}` }}>
          <div
            style={{
              font: 'normal normal 600 14px/19px Open Sans',
              letterSpacing: '-0.21px',
              color: palette.slate,
              marginBottom: '4px'
            }}
          >
            {item.title}
          </div>
          {item &&
            item.options!.map((checkbox) => (
              <Checkbox
                key={`${item.id}-checkbox-${checkbox.key}`}
                label={checkbox.label}
                styles={{
                  root: {
                    marginLeft: '0 !important',
                    marginTop: 4
                  }
                }}
                checked={checkbox.checked}
                onChange={(_, checked) => onCheckboxChanged(item, checkbox, checked)}
              />
            ))}
        </Stack>
      )
    },
    [palette.gray2, palette.slate]
  )

  const onRadioChanged = (item: IFilterItem, option?: IChoiceGroupOption) => {
    setFilterItems((previousItems) => {
      const newItems = previousItems.map((previousItem) => {
        if (previousItem.id === item.id) {
          return {
            ...previousItem,
            selectedKey: option?.key
          }
        }
        return previousItem
      })
      return newItems
    })
  }
  const renderRadio = React.useCallback(
    (item: IFilterItem): React.ReactNode => {
      return (
        <Stack key={item.id} style={{ padding: 16, borderBottom: `1px solid ${palette.gray2}` }}>
          <div
            style={{
              font: 'normal normal 600 14px/19px Open Sans',
              letterSpacing: '-0.21px',
              color: palette.slate,
              marginBottom: '8px'
            }}
          >
            {item.title}
          </div>
          <ChoiceGroup
            options={item.options!.map((option) => ({ key: option.key, text: option.label }) as IChoiceGroupOption)}
            required={true}
            selectedKey={item.selectedKey}
            onChange={(_, option) => onRadioChanged(item, option)}
            styles={{
              root: {
                '.ms-ChoiceField': {
                  marginTop: '-5px'
                }
              }
            }}
          />
        </Stack>
      )
    },
    [palette.gray2, palette.slate]
  )

  const handleClearAll = React.useCallback(() => {
    setFilterItems((previousItems) => {
      const newGroups = previousItems.map((previousItem) => ({
        ...previousItem,
        options: previousItem?.options?.map((option) => ({
          ...option,
          checked: false
        })),
        selectedKey: 'all'
      }))
      return newGroups
    })
  }, [])

  const handleClearClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation()
    handleClearAll()
    setCheckedFilterCount(0)
    onSave({})
  }

  const getCheckedFilterItems = (checkedFilterItems: IFilterItem[]): TCheckedFilterGroup => {
    const checkedFilters: TCheckedFilterGroup = {}
    let count = 0
    checkedFilterItems.forEach((group) => {
      switch (group.type) {
        case EFilterItemType.Checkbox: {
          const checkedItems = group.options.filter((c) => c.checked).map((c) => c.key)
          if (checkedItems.length > 0) {
            checkedFilters[group.id] = checkedItems
            count += checkedItems.length
          } else {
            delete checkedFilters[group.id]
          }
          break
        }
        case EFilterItemType.Radio:
          if (group.selectedKey !== 'all') {
            checkedFilters[group.id] = [group.selectedKey]
            count++
          } else {
            delete checkedFilters[group.id]
          }
          break
      }
    })
    setCheckedFilterCount(count)
    return checkedFilters
  }
  const handleFilter = () => {
    const checkedFilters: TCheckedFilterGroup = getCheckedFilterItems([...filterItems])
    onSave(checkedFilters)
    setCalloutVisible(false)
  }

  return (
    <div>
      {checkedFilterCount > 0 ? (
        <DefaultButton
          id={targetId || 'filters'}
          styles={{
            root: {
              height: 32,
              background: palette.gray1,
              color: palette.slate,
              font: 'normal normal 600 13px/18px Open Sans'
            }
          }}
          onClick={() => {
            setCalloutVisible(!calloutVisible)
            setFilterItems(items)
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ minWidth: 18, height: 18, background: palette.themePrimary, borderRadius: 9, marginRight: 8 }}
            >
              <div
                style={{
                  minWidth: 6,
                  height: 14,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  font: 'normal normal 600 10px/14px Open Sans',
                  padding: '2px 4px'
                }}
              >
                {checkedFilterCount}
              </div>
            </div>
            Filters
            <Icon
              iconName='fas-xmark'
              style={{ marginLeft: 14, cursor: 'pointer' }}
              onClick={(e) => handleClearClick(e)}
            />
          </span>
        </DefaultButton>
      ) : (
        <DefaultButton
          id={targetId || 'filters'}
          iconProps={{ iconName: 'af-filter' }}
          styles={{
            root: {
              height: 32,
              background: palette.gray1,
              color: palette.slate,
              font: 'normal normal 600 13px/18px Open Sans'
            }
          }}
          onClick={() => {
            setCalloutVisible(!calloutVisible)
            setFilterItems(items)
          }}
        >
          Filters
        </DefaultButton>
      )}
      {calloutVisible && (
        <Callout
          styles={{
            root: {
              '.ms-Callout-beak': {
                height: 0
              },

              '.ms-Callout-main': {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: 280,
                maxHeight: '499px !important'
              }
            }
          }}
          target={`#${targetId || 'filters'}`}
          isBeakVisible
          directionalHint={DirectionalHint.bottomRightEdge}
          gapSpace={-6}
          onDismiss={() => setCalloutVisible(false)}
          setInitialFocus
        >
          <div style={{ maxHeight: 250, overflowY: 'auto', width: '100%' }}>
            {filterItems.map((item) => {
              switch (item.type) {
                case EFilterItemType.Radio:
                  return renderRadio(item)
                case EFilterItemType.Checkbox:
                default:
                  return renderCheckbox(item)
              }
            })}
          </div>
          <div
            style={{
              right: 32,
              bottom: 0,
              flexShrink: 0,
              padding: 10,
              textAlign: 'right',
              borderTop: '1px solid #e6e7e8'
            }}
          >
            <Link underline onClick={handleClearAll}>
              Clear
            </Link>
            <PrimaryButton style={{ margin: '8px 16px 8px 32px' }} onClick={handleFilter}>
              Apply
            </PrimaryButton>
          </div>
        </Callout>
      )}
    </div>
  )
}

interface IManageTableColumnsProps {
  columns: Array<IFilterOption>
  searchBoxVisible?: boolean
  targetId?: string
  updateData: (columnsChecked?: Array<string>) => void
  disabledUnselectedColumn: string
}
const ManageTableColumns: React.FunctionComponent<IManageTableColumnsProps> = (props: IManageTableColumnsProps) => {
  const { columns, searchBoxVisible, targetId, updateData, disabledUnselectedColumn } = props
  const [filteredColumns, setFilteredColumns] = React.useState<Array<IFilterOption>>([])
  const [calloutVisible, setCalloutVisible] = React.useState(false)
  const palette = useTheme().palette as IExtendedPalette
  React.useEffect(() => {
    setFilteredColumns([...columns])
  }, [columns])

  const isSelectAll = React.useMemo(
    () => filteredColumns.filter((column) => column.checked).length === filteredColumns.length,
    [filteredColumns]
  )
  const onSearch = React.useCallback(
    (newValue?: string) => {
      const items = columns.filter((column) => new RegExp(`${newValue}`, 'i').test(column.label))
      setFilteredColumns(items)
    },
    [columns]
  )

  const onClear = React.useCallback(() => {
    setFilteredColumns([...columns])
  }, [columns])

  const onCheckboxChanged = (checkbox: IFilterOption, checked?: boolean) => {
    checkbox.checked = !!checked
    setFilteredColumns((previousColumns) => {
      const newColumns = previousColumns.map((previousColumn) => {
        return {
          ...previousColumn,
          checked: checkbox.key === previousColumn.key ? !!checked : previousColumn.checked
        }
      })
      return newColumns
    })
  }

  const onSelectAllChanged = (_?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
    setFilteredColumns((previousColumns) => {
      const newColumns = previousColumns.map((previousColumn) => {
        if (previousColumn.key !== disabledUnselectedColumn) {
          return {
            ...previousColumn,
            checked: !!checked
          }
        }
        return previousColumn
      })
      return newColumns
    })
  }

  return (
    <div>
      <DefaultButton
        id={targetId || 'basic-manage-table-columns'}
        iconProps={{ iconName: 'fas-table-columns' }}
        styles={{
          root: {
            height: 32,
            background: palette.gray1,
            color: palette.slate,
            font: 'normal normal 600 13px/18px Open Sans'
          }
        }}
        onClick={() => setCalloutVisible(!calloutVisible)}
      >
        Columns
      </DefaultButton>
      {calloutVisible && (
        <Callout
          styles={{
            root: {
              '.ms-Callout-beak': {
                height: 0
              },

              '.ms-Callout-main': {
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                width: 280,
                maxHeight: '499px !important'
              }
            }
          }}
          target={`#${targetId || 'basic-manage-table-columns'}`}
          isBeakVisible
          directionalHint={DirectionalHint.bottomRightEdge}
          gapSpace={-6}
          onDismiss={() => setCalloutVisible(false)}
          setInitialFocus
        >
          <div>
            {searchBoxVisible && (
              <SearchBox
                onSearch={onSearch}
                onClear={onClear}
                showIcon
                placeholder='Search...'
                styles={{ root: { margin: 12 } }}
              />
            )}
            <Stack
              horizontal
              style={{
                marginBottom: 10,
                display: 'flex',
                flexDirection: 'column',
                fontSize: 32,
                color: palette.galaxy
              }}
            >
              <Checkbox
                key={`${targetId}-select-all`}
                label='Select all'
                styles={{
                  root: {
                    marginLeft: '0 !important',
                    borderBottom: `1px solid ${palette.gray1}`,
                    padding: '8px 12px'
                  }
                }}
                checked={isSelectAll}
                onChange={onSelectAllChanged}
              />
              <div style={{ maxHeight: 250, overflowY: 'auto', width: '100%' }}>
                {filteredColumns.map((column) => (
                  <Checkbox
                    key={`checkbox-${column.key}`}
                    label={column.label}
                    styles={{
                      root: {
                        marginLeft: '0 !important',
                        marginTop: 8,
                        alignItems: 'center',
                        height: 40,
                        padding: '0 12px',
                        '&:hover': {
                          backgroundColor: `${palette.gray1} !important`
                        },
                        cursor: 'pointer'
                      }
                    }}
                    checked={column.checked}
                    onChange={(_, checked) => onCheckboxChanged(column, checked)}
                    disabled={column.key === disabledUnselectedColumn}
                  />
                ))}
              </div>
            </Stack>
          </div>
          <div
            style={{
              bottom: 0,
              right: 0,
              flexShrink: 0,
              padding: 10,
              textAlign: 'right',
              borderTop: '1px solid #e6e7e8'
            }}
          >
            <Link
              underline
              onClick={() => {
                setFilteredColumns([...columns])
              }}
            >
              Reset
            </Link>
            <PrimaryButton
              style={{ margin: '8px 17px 8px 24px' }}
              onClick={() => {
                updateData(columns.filter((column) => column.checked).map((column) => column.key))
                setCalloutVisible(false)
              }}
            >
              Apply
            </PrimaryButton>
          </div>
        </Callout>
      )}
    </div>
  )
}

interface IProfileOption {
  key: number | string
  text: string
  checked?: boolean
  default?: boolean
}
interface IDefaultViewProps {
  profiles: Array<IProfileOption>
  targetId?: string
  updateData: (
    callback: (search: string, checkedFilters: TCheckedFilterGroup, checkedColumns: Array<string>) => void
  ) => void
}
const DefaultView: React.FunctionComponent<IDefaultViewProps> = (props: IDefaultViewProps) => {
  const { profiles, targetId, updateData } = props
  const [filteredProfiles, setFilteredProfiles] = React.useState<Array<IProfileOption>>([])
  const [calloutVisible, setCalloutVisible] = React.useState(false)
  const [isOpenPrompt, setIsOpenPrompt] = React.useState(false)
  const [isDelete, setIsDelete] = React.useState<boolean>(false)
  const [name, setName] = React.useState<string>('')
  const [nameError, setNameError] = React.useState<string>('')
  const [isDefault, setIsDefault] = React.useState<boolean>(false)
  const palette = useTheme().palette as IExtendedPalette
  React.useEffect(() => {
    setFilteredProfiles([...profiles])
  }, [profiles])

  const checkedItem = React.useMemo(() => filteredProfiles.find((p) => p.checked), [filteredProfiles])

  const pageStyles: IStackStyles = {
    root: {
      '.ms-Callout-beak': {
        height: 0
      },
      '.ms-Callout-main': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: 240,
        maxHeight: '499px !important'
      },
      ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',

        li: {
          listStyle: 'none',
          font: 'normal normal normal 14px/19px Open Sans',
          letterSpacing: 0,
          color: palette.slate,
          height: '40px',
          lineHeight: '40px',
          padding: '12px 13px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',

          '.default': {
            textAlign: 'right',
            font: 'italic normal normal 12px/17px Open Sans',
            letterSpacing: '-0.18px',
            color: palette.gray6
          },

          '.icon-color': {
            color: palette.themePrimary
          },

          '.text': {
            marginRight: 'auto'
          },
          ':hover': {
            background: palette.gray1
          },
          '.item': {
            paddingLeft: '24px'
          }
        },
        '.border': {
          height: '1px',
          borderTop: `1px solid ${palette.gray2}`
        }
      }
    }
  }

  const handleCheckClick = React.useCallback((profile: IProfileOption) => {
    setFilteredProfiles((preProfiles) => {
      const newProfiles = preProfiles.map((p) => {
        return {
          ...p,
          checked: p.key === profile.key
        }
      })
      return newProfiles
    })
  }, [])

  const handleSaveClick = () => {
    if (checkedItem) {
      setIsOpenPrompt(false)
      if (updateData) {
        updateData((_search: string, _checkedFilters: TCheckedFilterGroup, _checkedColumns: Array<string>) => {
          //save to profile table
        })
      }
    }
  }

  const handleSaveAsClick = () => {
    if (checkedItem) {
      setIsDelete(false)
      setIsOpenPrompt(true)
    }
  }

  const handleSetDefaultClick = () => {
    if (checkedItem) {
      setIsDefault(false)
      setName('')
      setNameError('')
      setFilteredProfiles((preProfiles) => {
        const newProfiles = preProfiles.map((p) => {
          return {
            ...p,
            default: p.checked
          }
        })
        return newProfiles
      })
      //dispatch
    }
  }

  const handleDeleteClick = () => {
    if (filteredProfiles.length > 0 && !checkedItem?.default) {
      setIsDelete(true)
      setIsOpenPrompt(true)
    }
  }

  const nameChangeHandle = (_: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    newValue = newValue || ''
    setName(newValue)
    setNameError('')
    if (newValue.trim().length > 255) {
      setNameError('The name cannot exceed 255 characters.')
    }
  }

  const onCheckboxChanged = (checked: boolean) => {
    setIsDefault(!!checked)
  }

  const getPromptElement = (): JSX.Element => {
    const render = isDelete ? (
      <div>
        You are about to delete the view:{' '}
        <span style={{ font: 'normal normal 600 14px/19px Open Sans', color: palette.slate }}>{checkedItem?.text}</span>
        . are you sure you want to proceed?
      </div>
    ) : (
      <>
        <TextField
          label='Name'
          style={{ width: 400, height: 40 }}
          required
          value={name}
          onChange={nameChangeHandle}
          errorMessage={nameError}
          autoComplete='off'
        />
        <Checkbox
          label='Set as my default view'
          styles={{ root: { marginTop: 8 } }}
          checked={isDefault}
          onChange={(_, checked) => onCheckboxChanged(checked)}
        />
      </>
    )
    return render
  }

  const pageValidate = (): boolean => {
    let result = true
    if (!name.trim()) {
      setNameError('Enter a property name to proceed.')
      result = false
    }

    if (name.trim().length > 255) {
      setNameError('The name cannot exceed 255 characters.')
      result = false
    }

    return result
  }

  const handleAction = () => {
    if (isDelete) {
      setIsOpenPrompt(false)

      setTimeout(() => {
        setFilteredProfiles((preProfiles) => {
          const newProfiles = [...preProfiles]
          newProfiles.splice(
            newProfiles.findIndex((p) => p.checked),
            1
          )
          // if (newProfiles.length > 0) {
          //     newProfiles;
          // }
          return newProfiles
        })
      }, 200)
    } else {
      if (pageValidate()) {
        setIsOpenPrompt(false)

        setFilteredProfiles((preProfiles) => {
          const newProfiles = preProfiles.map((preProfile) => {
            return {
              ...preProfile,
              checked: isDefault ? false : preProfile.checked,
              default: isDefault ? false : preProfile.default
            }
          })
          newProfiles.push({
            key: Math.random(),
            text: name,
            default: isDefault,
            checked: true
          })
          return newProfiles
        })

        if (updateData) {
          updateData((_search: string, _checkedFilters: TCheckedFilterGroup, _checkedColumns: Array<string>) => {
            //save to profile table
          })
        }
      }
    }
  }
  return (
    <div>
      <DefaultButton
        id={targetId || 'basic-default-view'}
        iconProps={{ iconName: 'fas-list-ul' }}
        onClick={() => setCalloutVisible(!calloutVisible)}
        styles={{
          root: {
            height: 32,
            background: palette.gray1,
            color: palette.slate,
            font: 'normal normal 600 13px/18px Open Sans'
          }
        }}
      >
        Default view
        <Icon iconName='ChevronDown' style={{ margin: '0 8px', cursor: 'pointer' }} />
      </DefaultButton>
      {calloutVisible && (
        <Callout
          styles={pageStyles}
          target={`#${targetId || 'basic-default-view'}`}
          isBeakVisible
          directionalHint={DirectionalHint.bottomRightEdge}
          gapSpace={-6}
          onDismiss={() => setCalloutVisible(false)}
          setInitialFocus
        >
          <ul>
            {filteredProfiles.map((profile) => (
              <li key={profile.key} onClick={() => handleCheckClick(profile)}>
                <FontIcon
                  style={{ marginRight: 9, opacity: profile.checked ? 1 : 0 }}
                  iconName='fas-check'
                  className='icon-color'
                />
                <span className='text'>{profile.text}</span>
                {profile.default && <span className='default'>(Default)</span>}
              </li>
            ))}
            <div className='border'></div>
            <li onClick={handleSaveClick}>
              <span className='item'> Save view</span>
            </li>
            <li onClick={handleSaveAsClick}>
              <span className='item'> Save as view</span>
            </li>
            <li onClick={handleSetDefaultClick}>
              <span className='item'> Set as my default view</span>
            </li>
            {filteredProfiles.length > 0 && (
              <li onClick={handleDeleteClick}>
                <span className='item'> Delete view</span>
              </li>
            )}
          </ul>
        </Callout>
      )}
      <Prompt
        isOpen={isOpenPrompt}
        title={isDelete ? 'Delete' : 'Save as view'}
        body={getPromptElement()}
        onDimiss={() => {
          setIsOpenPrompt(false)
        }}
        defaultBtnProps={{
          onClick: () => {
            setIsOpenPrompt(false)
          }
        }}
        primaryBtnProps={{
          onClick: handleAction,
          text: isDelete ? 'Delete' : 'Save'
        }}
      />
    </div>
  )
}

interface IPromptProps {
  isOpen: boolean
  title: string
  body: string | JSX.Element
  onDimiss?: () => void
  defaultBtnProps?: {
    className?: string
    text?: string
    onClick?: () => void
  }
  primaryBtnProps?: {
    className?: string
    text?: string
    onClick?: () => void
  }
}
const Prompt: React.FC<IPromptProps> = ({
  isOpen,
  title,
  body,
  defaultBtnProps,
  primaryBtnProps,
  onDimiss
}: IPromptProps) => {
  return (
    <div>
      <Dialog hidden={!isOpen} onDismiss={onDimiss} title={title} maxWidth='480px' minWidth='480px'>
        <div>{body}</div>
        <DialogFooter>
          {defaultBtnProps && (
            <DefaultButton onClick={defaultBtnProps.onClick}>{defaultBtnProps.text ?? 'Cancel'}</DefaultButton>
          )}
          {primaryBtnProps && (
            <PrimaryButton onClick={primaryBtnProps.onClick}>{primaryBtnProps.text ?? 'OK'}</PrimaryButton>
          )}
        </DialogFooter>
      </Dialog>
    </div>
  )
}
