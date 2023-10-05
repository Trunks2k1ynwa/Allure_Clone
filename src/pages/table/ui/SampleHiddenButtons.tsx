import {
  Stack,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  Link,
  IconButton,
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

export const SampleHiddenButtons: React.FunctionComponent = () => {
  const pageStyles: IStackStyles = {
    root: {
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
        },

        '.ms-detailsList-link-data': {
          fontSize: '14px'
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
      }
    }
  }

  //#region detailsList
  const getColumns = (): IColumn[] => {
    const columns: Partial<IColumn>[] = [
      {
        key: 'name',
        name: 'Name'
      },
      {
        key: 'description',
        name: 'Description'
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

  const items: itemProps[] = new Array(5).fill(0).map((_item, index) => {
    const _index: string = `${index + 1}`.padStart(3, '0')
    return {
      key: `${_index}`,
      name: `name${_index}`,
      description: `description${_index}`,
      status: `status${_index}`,
      link: `link${_index}`
    }
  })

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
            <Link
              className='ms-detailsList-link-data'
              underline
              onMouseDown={(e) => {
                e.stopPropagation()
              }}
            >
              Link to data
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
  //#endregion
  return (
    <Stack styles={pageStyles}>
      <ShimmeredDetailsList
        compact
        checkboxVisibility={CheckboxVisibility.always}
        key={'detailsList'}
        setKey={'detailsList'}
        columns={getColumns()}
        items={items}
        selectionPreservedOnEmptyClick
        onRenderItemColumn={onRenderItemColumn}
      ></ShimmeredDetailsList>
    </Stack>
  )
}
