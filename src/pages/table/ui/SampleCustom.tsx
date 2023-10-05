import { CheckboxVisibility, ContextualMenuItemType, DirectionalHint, IButtonProps } from '@fluentui/react'
import {
  Stack,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  SecondaryText,
  Link,
  IconButton,
  PrimaryButton,
  DefaultButton,
  IStackStyles,
  IContextualMenuProps,
  IContextualMenuStyles,
  Persona,
  IDropdownOption,
  ISelection,
  Selection,
  Toggle,
  SearchBox,
  ShimmeredDetailsList,
  Dropdown,
  CommandBar,
  ICommandBarItemProps
} from '@gui/fluent-ui-allure'
import * as React from 'react'

interface itemProps {
  name: string
  secondary: string
  tertiary: string
  status: string
  link: string
}

export const SampleCustom: React.FunctionComponent = () => {
  const pageStyles: IStackStyles = {
    root: {
      '.ms-detailsList-header': {
        marginBottom: '16px',
        '.ms-searchBox-box': {
          marginRight: '16px',
          '.ms-searchBox': {
            width: '50%',
            maxWidth: '380px',
            marginRight: '16px',
            border: '1px solid #E8E9EA',
            borderRadius: '4px',
            backgroundColor: '#F2F3F4',

            '.ms-SearchBox-iconContainer': {
              color: '#323E4D'
            },

            'input::placeholder': {
              fontStyle: 'italic'
            }
          }
        },

        '.ms-header-link': {
          fontStyle: 'italic',
          color: '#707174'
        },

        '.ms-filters-button': {
          marginRight: '8px',
          backgroundColor: '#f2f3f4',

          ':hover': {
            backgroundColor: '#e8e9ea'
          }
        },

        '.ms-view-button': {
          backgroundColor: '#f2f3f4',

          ':hover': {
            backgroundColor: '#e8e9ea'
          }
        }
      },

      '.ms-commandBar-wrap': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #E8E9EA',
        padding: '12px 0',

        '.ms-CommandBar': {
          padding: '12px 16px',
          backgroundColor: 'transparent',
          alignItems: 'center',

          '.ms-commandBar-item-wrap': {
            marginRight: '8px'
          },

          '.ms-overflowButton-root': {
            border: '1px solid #E8E9EA',
            height: 40,
            width: 40,
            borderRadius: '4px'
          }
        }
      },

      '.ms-detailsList-wrap': {
        height: '600px',
        overflowX: 'auto',
        overflowY: 'auto',
        position: 'relative',

        '.ms-DetailsList': {
          overflow: 'visible',

          '.ms-DetailsList-headerWrapper': {
            position: 'sticky',
            top: 0,
            zIndex: 1
          }
        },

        '.ms-DetailsRow': {
          borderBottom: '1px solid #f3f2f1',

          ':hover': {
            '.detailslist-more': {
              opacity: '1 !important'
            }
          }
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
          }
        },

        '.ms-detailsList-item-persona': {
          '.ms-Persona-primaryText': {
            fontWeight: 'bold',
            color: '#323E4D'
          },

          '.ms-Persona-secondaryText': {
            fontSize: '14px',
            color: '#323E4D'
          },

          '.ms-Persona-initials': {
            borderRadius: '8px'
          }
        },

        '.detailslist-more': {
          opacity: 0,

          '.ms-Button-icon': {
            width: '22px'
          },

          '.ms-Button-menuIcon': {
            display: 'none'
          }
        },

        '.ms-detailsList-link-data': {
          fontSize: '14px'
        }
      },

      '.ms-pagination-footer': {
        borderTop: '1px solid #E8E9EA',

        '.ms-footer-dropdown-root': {
          marginRight: '16px',

          '.ms-Dropdown': {
            minWidth: '54px',

            '.ms-Dropdown-title': {
              border: '1px solid #e8e9ea',
              borderRadius: '4px',
              height: 24,
              lineHeight: 24
            },

            '.ms-Dropdown-caretDownWrapper': {
              height: 24,
              lineHeight: 24,
              padding: 0
            }
          }
        },

        '.ms-pagination-icon-last': {
          marginRight: '4px',
          height: 24,
          width: 24
        },

        '.ms-pagination-icon-next': {
          height: 24,
          width: 24
        },

        '.ms-pagination-icon-last,.ms-pagination-icon-next': {
          '.ms-Button-icon': {
            fontSize: '13px'
          }
        }
      }
    }
  }

  const demoItems: itemProps[] = new Array(100).fill(0).map((_item, index) => {
    const _index: string = `${index + 1}`.padStart(3, '0')
    return {
      key: `${_index}`,
      name: `name${_index}`,
      secondary: `secondary${_index}`,
      tertiary: `tertiary${_index}`,
      status: `status${_index}`,
      link: `link${_index}`
    }
  })

  //#region header
  const onModeChange: (event: React.MouseEvent, checked: boolean) => void = async (_event, checked) => {
    if (checked) {
      setMode('pagination')
      loadItemsByPaginationMode()
    } else {
      setMode('scrolling')
      loadInitItems()
    }
  }

  const getMenuProps: () => IContextualMenuProps = () => ({
    directionalHint: DirectionalHint.bottomRightEdge,
    items: [
      {
        key: 'view1',
        text: 'Default view',
        secondaryText: '(Default)',
        canCheck: true,
        isChecked: viewSelectedKey === 'view1',
        onClick: () => {
          setViewSelectedKey('view1')
        }
      },
      {
        key: 'view2',
        text: 'Custom view',
        canCheck: true,
        isChecked: viewSelectedKey === 'view2',
        onClick: () => {
          setViewSelectedKey('view2')
        }
      },
      {
        key: 'view3',
        text: 'Custom view',
        canCheck: true,
        isChecked: viewSelectedKey === 'view3',
        onClick: () => {
          setViewSelectedKey('view3')
        }
      },
      {
        key: 'divider',
        itemType: ContextualMenuItemType.Divider
      },
      {
        key: 'view4',
        text: 'Save view',
        canCheck: false
      },
      {
        key: 'view5',
        text: 'Save as view',
        canCheck: false
      },
      {
        key: 'view6',
        text: 'Set as my default view',
        canCheck: false
      },
      {
        key: 'view7',
        text: 'Delete view',
        canCheck: false
      }
    ]
  })

  const onSearch: (value: string) => void = (value) => {
    searchValue.current = value
    if (mode === 'pagination') {
      loadItemsByPaginationMode()
    } else {
      loadInitItems()
    }
  }

  const onClear: (ev: any) => void = (_ev) => {
    searchValue.current = ''
    if (mode === 'pagination') {
      loadItemsByPaginationMode()
    } else {
      loadInitItems()
    }
  }
  //#endregion

  //#region commandBar
  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: 'filled_button',
      text: 'Filled button',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <PrimaryButton
              onClick={() => {
                alert('Filled button')
                onDissmiss()
              }}
            >
              {item.text}
            </PrimaryButton>
          </div>
        )
      }
    },
    {
      key: 'outlined_button',
      text: 'Outlined',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Outlined')
                onDissmiss()
              }}
              iconProps={{ iconName: 'fas-rotate-left' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    },
    {
      key: 'outlined1_button',
      text: 'Outlined1',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Outlined1')
                onDissmiss()
              }}
              iconProps={{ iconName: 'fas-rotate-left' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    },
    {
      key: 'outlined2_button',
      text: 'Outlined2',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Outlined2')
                onDissmiss()
              }}
              iconProps={{ iconName: 'fas-rotate-left' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    }
  ]

  const overflowItems: ICommandBarItemProps[] = [
    {
      key: 'move',
      text: 'Move to',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Move to')
                onDissmiss()
              }}
              iconProps={{ iconName: 'MoveToFolder' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    },
    {
      key: 'copy',
      text: 'Copy to',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Copy to')
                onDissmiss()
              }}
              iconProps={{ iconName: 'Copy' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    },
    {
      key: 'rename',
      text: 'Rename',
      onRender: (item, onDissmiss) => {
        return (
          <div className='ms-commandBar-item-wrap'>
            <DefaultButton
              onClick={() => {
                alert('Rename')
                onDissmiss()
              }}
              iconProps={{ iconName: 'Edit' }}
            >
              {item.text}
            </DefaultButton>
          </div>
        )
      }
    }
  ]

  const overflowButtonMenuStyles: Partial<IContextualMenuStyles> = {
    root: {
      '.ms-Button': {
        // width: '100%',
        textAlign: 'left',
        margin: '0',
        border: '0'
      }
    }
  }

  const overflowButtonProps: IButtonProps = {
    styles: {
      root: 'ms-overflowButton-root'
    },
    menuProps: {
      items: [],
      styles: overflowButtonMenuStyles
    }
  }
  //#endregion

  //#region detailsList
  const onScrollCapture: (e: any) => void = (e) => {
    const target = e.target
    if (target.scrollHeight - target.clientHeight <= target.scrollTop + 64 && !isLoading && !isAllLoaded) {
      getNextItems()
    }
  }

  const getColumns = (): IColumn[] => {
    const columns: Partial<IColumn>[] = [
      {
        key: 'name',
        name: 'Name'
      },
      {
        key: 'secondary',
        name: 'Secondary data'
      },
      {
        key: 'tertiary',
        name: 'Tertiary data'
      },
      {
        key: 'status',
        name: 'Status'
      },
      {
        key: 'link',
        name: 'Link'
      },
      {
        key: 'more',
        name: '',
        minWidth: 50,
        maxWidth: 50,
        isResizable: false
      }
    ]
    return columns.map((column) => {
      return {
        ...column,
        key: column.key,
        name: column.name,
        minWidth: column.minWidth || 80,
        isResizable: column.isResizable === false ? false : true,
        maxWidth: column.maxWidth || 160
      }
    })
  }

  const onColumnHeaderClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>, column: IColumn) => void = (
    _ev,
    column
  ) => {
    const newColumns: IColumn[] = [...columns]
    newColumns.forEach((newColumn) => {
      if (newColumn.key === column.key) {
        newColumn.isSorted = true
        newColumn.isSortedDescending = !newColumn.isSortedDescending
        sortInfo.current.sortKey = column.key
        sortInfo.current.isSortedDescending = newColumn.isSortedDescending
      } else {
        newColumn.isSorted = false
        newColumn.isSortedDescending = false
      }
    })
    setColumns(newColumns)
    if (mode === 'pagination') {
      loadItemsByPaginationMode()
    } else {
      loadInitItems()
    }
  }

  const onRenderItemColumn: (item: itemProps, index: number, column: IColumn) => React.ReactNode = (
    item,
    index,
    column
  ) => {
    switch (column.key) {
      case 'name':
        if (index <= 2) {
          return (
            <Persona
              className='ms-detailsList-item-persona'
              coinSize={40}
              text={item.name}
              secondaryText={item.secondary}
              hidePersonaDetails={false}
            />
          )
        } else {
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
        }
      case 'secondary':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Text block>{item.secondary}</Text>
          </div>
        )
      case 'tertiary':
        return (
          <div className='ms-detailsList-item-wrap'>
            <SecondaryText block>{item.tertiary}</SecondaryText>
          </div>
        )
      case 'status':
        return (
          <div className='ms-detailsList-item-wrap'>
            <div className='ms-detailsList-status-wrap'>
              <div className='ms-detailsList-status-tip'></div>
              <Text block> {item.status}</Text>
            </div>
          </div>
        )
      case 'link':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Link
              className='ms-detailsList-link-data'
              underline
              onMouseDown={(e) => {
                e.stopPropagation()
              }}
            >
              Text link
            </Link>
          </div>
        )
      case 'more':
        return (
          <div className='detailslist-more'>
            <IconButton
              iconProps={{ iconName: 'fas-ellipsis' }}
              bordered
              menuProps={{
                items: [
                  {
                    key: 'action1',
                    text: 'Action1',
                    onClick: () => {
                      alert('Action1')
                    }
                  },
                  {
                    key: 'action2',
                    text: 'Action2',
                    onClick: () => {
                      alert('Action2')
                    }
                  }
                ]
              }}
            ></IconButton>
          </div>
        )
      default:
        return <div></div>
    }
  }

  const getItems = React.useCallback(
    (
      search: string,
      top: number,
      skip: number,
      orderby: { sortKey: string; isSortedDescending: boolean }
    ): Promise<itemProps[]> => {
      return new Promise((res, _rej) => {
        let newItems: any[] = [...demoItems]
        if (search) {
          newItems = newItems.filter((item) => {
            return item.name.includes(search)
          })
        }
        if (orderby.sortKey) {
          newItems.sort((a, b) => {
            return a[orderby.sortKey].localeCompare(b[orderby.sortKey]) * (orderby.isSortedDescending ? -1 : 1)
          })
        }
        newItems = newItems.slice(skip, top + skip)
        setTimeout(() => {
          res(newItems)
        }, 1000)
      })
    },
    [demoItems]
  )

  const getItemsTotalCount = (search: string): Promise<number> => {
    return new Promise((res, _rej) => {
      let newItems: any[] = [...demoItems]
      if (search) {
        newItems = newItems.filter((item) => {
          return item.name.includes(search)
        })
      }
      res(newItems.length)
    })
  }

  const loadInitItems = React.useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      const newItems: itemProps[] = await getItems(searchValue.current, 20, 0, {
        sortKey: sortInfo.current.sortKey,
        isSortedDescending: sortInfo.current.isSortedDescending
      })
      setItems(newItems)
      setAllLoaded(newItems.length === 0)
    } catch (error) {
      // Xử lý lỗi nếu cần
    } finally {
      setLoading(false)
    }
  }, [getItems])

  const getNextItems = async (): Promise<void> => {
    const tempItems = [...items]
    setLoading(true)
    setItems((items || []).concat(new Array(10).fill(null)))
    const newItems: itemProps[] = await getItems(searchValue.current, 20, items.length, {
      sortKey: sortInfo.current.sortKey,
      isSortedDescending: sortInfo.current.isSortedDescending
    })
    setLoading(false)
    if (newItems.length === 0) {
      setAllLoaded(true)
    }
    setItems(tempItems.concat(newItems))
  }

  const loadItemsByPaginationMode = async (pageIndex?: number): Promise<void> => {
    setItems([])
    setAllLoaded(false)
    setLoading(true)
    if (!pageIndex) {
      setPageSelectedKey(0)
    }
    await getItemsTotalCount(searchValue.current).then((count) => {
      setItemsTotalCount(count)
    })
    const newItems: itemProps[] = await getItems(searchValue.current, 20, (pageIndex || 0) * 20, {
      sortKey: sortInfo.current.sortKey,
      isSortedDescending: sortInfo.current.isSortedDescending
    })
    setLoading(false)
    setItems(newItems)
  }
  //#endregion

  //#region pagination
  const getPageDisplayedRange = (): string => {
    if (itemsTotalCount === 1) {
      return `Displaying 1 of 1`
    }
    let pageDisplayedRange = ''
    pageDisplayedRange = `Displaying ${1 + pageSelectedKey * 20}-${Math.min(
      20 + pageSelectedKey * 20,
      itemsTotalCount
    )} of ${itemsTotalCount}`
    return pageDisplayedRange
  }

  const getPaginationDropdownOptions = React.useCallback(() => {
    const newOptions = new Array(Math.ceil(itemsTotalCount / 20)).fill(0).map((_option, index) => {
      return { key: index, text: `${index + 1}` }
    })
    paginationOptions.current = newOptions
  }, [])

  const onPageSelectedChange: (event: React.FormEvent, option: IDropdownOption<any>, index: number) => void = (
    _event,
    _newOption,
    index
  ) => {
    setPageSelectedKey(index)
    loadItemsByPaginationMode(index)
  }

  const onLastPageClick = (): void => {
    setPageSelectedKey(pageSelectedKey - 1)
    loadItemsByPaginationMode(pageSelectedKey - 1)
  }

  const onNextPageClick = (): void => {
    setPageSelectedKey(pageSelectedKey + 1)
    loadItemsByPaginationMode(pageSelectedKey + 1)
  }
  //#endregion

  const searchValue = React.useRef('')
  const selection: React.MutableRefObject<ISelection> = React.useRef(
    new Selection({
      onSelectionChanged: () => {
        setSelectedItems(selection.current.getSelection())
      }
    })
  )
  const sortInfo = React.useRef({
    sortKey: '',
    isSortedDescending: false
  })
  const paginationOptions = React.useRef([])
  const [mode, setMode] = React.useState<'scrolling' | 'pagination'>('scrolling')
  const [viewSelectedKey, setViewSelectedKey] = React.useState('view1')
  const [columns, setColumns] = React.useState(getColumns())
  const [items, setItems] = React.useState([])
  const [selectedItems, setSelectedItems] = React.useState([])
  const [isLoading, setLoading] = React.useState(false)
  const [isAllLoaded, setAllLoaded] = React.useState(false)
  const [itemsTotalCount, setItemsTotalCount] = React.useState(0)
  const [pageSelectedKey, setPageSelectedKey] = React.useState(0)
  React.useEffect(() => {
    loadInitItems()
  }, [loadInitItems])
  React.useEffect(() => {
    getPaginationDropdownOptions()
  }, [itemsTotalCount, getPaginationDropdownOptions])

  return (
    <>
      <Toggle inlineLabel onText='Pagination Mode' offText='Scrolling Mode' onChange={onModeChange} />
      <Stack styles={pageStyles}>
        <Stack horizontal horizontalAlign='space-between' verticalAlign='center' className='ms-detailsList-header'>
          <Stack horizontal horizontalAlign='start' verticalAlign='center' grow>
            <SearchBox
              styles={{ root: { height: 32 }, box: { width: 240 }, iconSearchButton: { top: -3 } }}
              placeholder='Search...'
              onSearch={onSearch}
              onClear={onClear}
            />
            <Link
              underline
              className='ms-header-link'
              onClick={() => {
                alert('Advanced search')
              }}
            >
              Advanced search
            </Link>
          </Stack>
          <Stack horizontal horizontalAlign='end' verticalAlign='center'>
            <DefaultButton
              size='small'
              iconProps={{ iconName: 'fas-sliders' }}
              className='ms-filters-button'
              onClick={() => {
                alert('Filters')
              }}
            >
              Filters
            </DefaultButton>
            <DefaultButton
              size='small'
              iconProps={{ iconName: 'fas-list' }}
              menuProps={getMenuProps()}
              className='ms-view-button'
            >
              Default view
            </DefaultButton>
          </Stack>
        </Stack>
        <div className='ms-commandBar-wrap'>
          <Stack grow>
            <CommandBar
              items={commandBarItems}
              overflowItems={overflowItems}
              overflowButtonProps={overflowButtonProps}
            />
          </Stack>
          <SecondaryText block>{`${selectedItems.length} of ${items.length} selected`}</SecondaryText>
        </div>
        <div className='ms-detailsList-wrap' onScrollCapture={mode === 'scrolling' ? onScrollCapture : undefined}>
          <ShimmeredDetailsList
            compact
            checkboxVisibility={CheckboxVisibility.always}
            key={'detailsList'}
            setKey={'detailsList'}
            selection={selection.current}
            columns={columns}
            enableShimmer={isLoading && !items.length}
            onColumnHeaderClick={onColumnHeaderClick}
            items={items}
            onRenderItemColumn={onRenderItemColumn}
          ></ShimmeredDetailsList>
          {!isLoading && !items.length && <Stack horizontalAlign='center'>{'No data'}</Stack>}
        </div>
        {mode === 'pagination' && (
          <Stack
            className='ms-pagination-footer'
            horizontal
            horizontalAlign='space-between'
            padding='16px 0'
            verticalAlign='center'
          >
            <SecondaryText block>{getPageDisplayedRange()}</SecondaryText>
            <Stack horizontal horizontalAlign='end'>
              <Dropdown
                placeholder='1'
                selectedKey={pageSelectedKey}
                onChange={onPageSelectedChange}
                options={paginationOptions.current}
                styles={{
                  root: 'ms-footer-dropdown-root'
                }}
              />
              <IconButton
                styles={{
                  root: 'ms-pagination-icon-last'
                }}
                iconProps={{
                  iconName: 'DecreaseIndentArrow'
                }}
                disabled={pageSelectedKey === 0}
                onClick={onLastPageClick}
              />
              <IconButton
                styles={{
                  root: 'ms-pagination-icon-next'
                }}
                iconProps={{
                  iconName: 'IncreaseIndentArrow'
                }}
                disabled={pageSelectedKey === paginationOptions.current.length - 1}
                onClick={onNextPageClick}
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  )
}
