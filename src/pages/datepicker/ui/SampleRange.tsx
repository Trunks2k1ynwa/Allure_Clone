import {
  DateRangePicker,
  DayOfWeek,
  IStackStyles,
  Link,
  PrimaryButton,
  Stack,
  defaultDatePickerStrings
} from '@gui/fluent-ui-allure'
import React from 'react'
export const SampleRange: React.FunctionComponent = () => {
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

  const [previousDate, setPreviousDate] = React.useState<Date>()
  const [nextDate, setNextDate] = React.useState<Date>()
  const [clickClearOrReset, setClickClearOrReset] = React.useState<boolean>(false)
  const previousDateRef = React.useRef<Date>()
  const nextDateRef = React.useRef<Date>()

  const dateRangeRef: React.MutableRefObject<{
    clearDate: () => void
    dismissCalendar: () => void
    setDateRange: (dateRange: { previousDate: Date; nextDate: Date }) => void
  }> = React.useRef()

  const setDateRange = () => {
    previousDateRef.current = getStartDateOfWeek(new Date(), DayOfWeek.Sunday)
    nextDateRef.current = addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6)
    setPreviousDate(previousDateRef.current)
    setNextDate(nextDateRef.current)
    setClickClearOrReset(true)
  }

  const clearDateRange = () => {
    previousDateRef.current = getStartDateOfWeek(new Date(), DayOfWeek.Sunday)
    nextDateRef.current = addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6)
    setPreviousDate(previousDateRef.current)
    setNextDate(nextDateRef.current)
    setClickClearOrReset(true)
  }

  const saveDateRange = () => {
    if (!clickClearOrReset) {
      setPreviousDate(previousDateRef.current)
      setNextDate(nextDateRef.current)
    }
    dateRangeRef?.current?.dismissCalendar()
    setClickClearOrReset(false)
  }

  React.useEffect(() => {
    setClickClearOrReset(false)
  }, [])

  return (
    <Stack styles={pageStyles}>
      <DateRangePicker
        ref={(ref: {
          clearDate: () => void
          dismissCalendar: () => void
          setDateRange: (dateRange: { previousDate: Date; nextDate: Date }) => void
        }) => {
          if (ref) {
            dateRangeRef.current = ref
          }
        }}
        strings={{
          ...defaultDatePickerStrings
        }}
        dateRangePickerId='uniqueId'
        initialPickerDate={previousDate}
        dateRangeProps={{ previousDate: previousDate, nextDate: nextDate }}
        onChangeDate={(previousDate: Date, nextDate: Date) => {
          previousDateRef.current = previousDate
          nextDateRef.current = nextDate
          console.log(`Date range is from ${previousDateRef.current} to ${nextDateRef.current}.`)
        }}
        onRenderFooter={() => {
          return (
            <Stack horizontal verticalAlign='center' styles={{ root: { margin: 16 } }}>
              <Stack grow={1}>
                <Link underline onClick={clearDateRange}>
                  {'Clear'}
                </Link>
              </Stack>
              <Stack horizontal tokens={{ childrenGap: 24 }}>
                <Link underline onClick={setDateRange}>
                  {'Reset'}
                </Link>
                <PrimaryButton text='OK' onClick={saveDateRange} />
              </Stack>
            </Stack>
          )
        }}
      />
    </Stack>
  )
}
function getStartDateOfWeek(_arg0: Date, _Sunday: any): Date | undefined {
  throw new Error('Function not implemented.')
}

function addDays(_arg0: any, _arg1: number): Date | undefined {
  throw new Error('Function not implemented.')
}
