import {
  Stack,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  Link,
  IStackStyles,
  ShimmeredDetailsList,
  CheckboxVisibility
} from '@gui/fluent-ui-allure'
import * as React from 'react'

interface itemProps {
  name: string
  description: string
  status: string
  link: string
}

export const SampleSort: React.FunctionComponent = () => {
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
      }
    }
  }

  //#region detailsList
  const initColumns: IColumn[] = [
    {
      key: 'name',
      name: 'Name',
      isSorted: true,
      isSortedDescending: true,
      styles: {
        cellTitle: {
          cursor: 'pointer'
        }
      }
    } as IColumn,
    {
      key: 'description',
      name: 'Description',
      styles: {
        cellTitle: {
          cursor: 'pointer'
        }
      }
    },
    {
      key: 'status',
      name: 'Status',
      styles: {
        cellTitle: {
          cursor: 'pointer'
        }
      }
    },
    {
      key: 'link',
      name: 'Link',
      styles: {
        cellTitle: {
          cursor: 'pointer'
        }
      }
    }
  ].map((column) => {
    return {
      ...column,
      minWidth: 80,
      isResizable: true,
      maxWidth: 160
    }
  })

  const initItems: itemProps[] = new Array(5).fill(0).map((_item, index) => {
    const _index: string = `${index + 1}`.padStart(3, '0')
    return {
      key: `${_index}`,
      name: `name${_index}`,
      description: `description${_index}`,
      status: `status${_index}`,
      link: `link${_index}`
    }
  })

  const onColumnHeaderClick: (
    ev?: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
    column?: IColumn | undefined
  ) => void = (_ev, column) => {
    const newColumns: IColumn[] = [...columns]
    newColumns.forEach((newColumn) => {
      if (newColumn.key === column!.key) {
        newColumn.isSorted = true
        newColumn.isSortedDescending = !newColumn.isSortedDescending
        sortInfo.current.sortKey = column!.key
        sortInfo.current.isSortedDescending = newColumn.isSortedDescending
      } else {
        newColumn.isSorted = false
        newColumn.isSortedDescending = false
      }
    })
    setColumns(newColumns)
    getItems()
  }

  const onRenderItemColumn: (
    item?: any,
    index?: number | undefined,
    column?: IColumn | undefined
  ) => React.ReactNode = (item, _index, column) => {
    switch (column!.key) {
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
      case 'description':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Text block>{item.description}</Text>
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
      case 'link':
        return (
          <div className='ms-detailsList-item-wrap'>
            <Link className='ms-detailsList-link-data' underline>
              Link to data
            </Link>
          </div>
        )
      default:
        return <div></div>
    }
  }

  const getItems = React.useCallback((): void => {
    const newItems: any[] = [...initItems]
    if (sortInfo.current.sortKey) {
      newItems.sort((a, b) => {
        return (
          a[sortInfo.current.sortKey].localeCompare(b[sortInfo.current.sortKey]) *
          (sortInfo.current.isSortedDescending ? -1 : 1)
        )
      })
    }
    setItems(newItems)
  }, [initItems])

  const sortInfo = React.useRef({
    sortKey: 'name',
    isSortedDescending: true
  })
  const [columns, setColumns] = React.useState(initColumns)
  const [items, setItems] = React.useState<any[]>([])
  React.useEffect(() => {
    getItems()
  }, [getItems])
  return (
    <Stack styles={pageStyles}>
      <ShimmeredDetailsList
        compact
        checkboxVisibility={CheckboxVisibility.hidden}
        key={'detailsList'}
        setKey={'detailsList'}
        columns={columns}
        onColumnHeaderClick={onColumnHeaderClick}
        items={items}
        onRenderItemColumn={onRenderItemColumn}
      ></ShimmeredDetailsList>
    </Stack>
  )
}
