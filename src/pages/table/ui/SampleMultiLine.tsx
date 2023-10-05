import {
  Stack,
  IColumn,
  Text,
  Link,
  Persona,
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

export const SampleMultiLine: React.FunctionComponent = () => {
  const pageStyles: IStackStyles = {
    root: {
      '.ms-DetailsRow': {
        borderBottom: '1px solid #f3f2f1',
        '.ms-DetailsRow-fields': {
          height: '62px',
          alignItems: 'center'
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

        '.ms-detailsList-link-data': {
          fontSize: '14px'
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
          <Persona
            className='ms-detailsList-item-persona'
            coinSize={40}
            text={item.name}
            secondaryText={item.description}
            hidePersonaDetails={false}
          />
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
