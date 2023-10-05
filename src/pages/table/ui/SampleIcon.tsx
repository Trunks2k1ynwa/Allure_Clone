import {
  Stack,
  IColumn,
  TooltipHost,
  HeadingText,
  HeadingType,
  Text,
  Link,
  IStackStyles,
  Icon,
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

export const SampleIcon: React.FunctionComponent = () => {
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
          display: 'inline-flex',
          alignItems: 'center',

          '.ms-detailsList-name-icon': {
            marginRight: '8px'
          }
        },

        '.ms-detailsList-link-data': {
          fontSize: '14px'
        }
      }
    }
  }

  //#region detailsList
  const columns: IColumn[] = [
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
    }
  ].map((column) => {
    return {
      ...column,
      minWidth: 80,
      isResizable: true,
      maxWidth: 160
    }
  })

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
              <Icon iconName='fas-file-pdf' className='ms-detailsList-name-icon'></Icon>
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
      default:
        return <div></div>
    }
  }
  //#endregion
  return (
    <Stack styles={pageStyles}>
      <ShimmeredDetailsList
        compact
        checkboxVisibility={CheckboxVisibility.hidden}
        key={'detailsList'}
        setKey={'detailsList'}
        columns={columns}
        items={items}
        onRenderItemColumn={onRenderItemColumn}
      ></ShimmeredDetailsList>
    </Stack>
  )
}
