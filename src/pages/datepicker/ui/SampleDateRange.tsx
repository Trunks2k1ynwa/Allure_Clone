import { DatePicker, IStackStyles, Link, Stack } from '@gui/fluent-ui-allure'
import React from 'react'
export const SampleDateRange: React.FunctionComponent = () => {
  const [leftDate, setLeftDate] = React.useState<Date>()
  const [rightDate, setRightDate] = React.useState<Date>()
  const pageStyles: IStackStyles = {
    root: {
      '.ms-DetailsRow': {
        borderBottom: '1px solid #f3f2f1'
      },

      '.ms-detailsList-item-wrap': {
        padding: '10px 0',

        '.ms-detailsList-status-wrap': {
          display: 'flex',
          alignItems: 'baseline',

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
      }
    }
  }

  const onFormatDate = (date?: Date): string => {
    return !date ? '' : date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
  }

  return (
    <Stack styles={pageStyles} horizontal tokens={{ childrenGap: 8 }}>
      <DatePicker
        allowTextInput={true}
        value={leftDate}
        formatDate={onFormatDate}
        placeholder={'mm/dd/yyyy'}
        maxDate={rightDate}
        onSelectDate={(newDate) => {
          if (newDate) setLeftDate(newDate)
        }}
        styles={{ root: { width: 200 } }}
        onRenderFooter={() => {
          return (
            <Stack horizontal horizontalAlign='center' style={{ margin: 10 }}>
              <Link underline onClick={() => setLeftDate(new Date())}>
                {'Reset'}
              </Link>
            </Stack>
          )
        }}
      />
      <DatePicker
        allowTextInput={true}
        value={rightDate}
        minDate={leftDate}
        formatDate={onFormatDate}
        placeholder={'mm/dd/yyyy'}
        onSelectDate={(newDate) => {
          if (newDate) setRightDate(newDate)
        }}
        styles={{ root: { width: 200 } }}
        onRenderFooter={() => {
          return (
            <Stack horizontal horizontalAlign='center' style={{ margin: 10 }}>
              <Link underline onClick={() => setRightDate(new Date())}>
                {'Reset'}
              </Link>
            </Stack>
          )
        }}
      />
    </Stack>
  )
}
