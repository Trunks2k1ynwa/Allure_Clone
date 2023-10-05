import { SampleDateRange } from './ui/SampleDateRange'
import { SampleRange } from './ui/SampleRange'
import { SampleBasic } from './ui/SampleBasic'

export const dataDatePickers = [
  {
    title: 'Basic usage',
    label:
      'A user can choose a specific date using a date picker by clicking the calendar icon or just input by themselves.',
    ui: <SampleBasic />,
    code: `import { 
      Stack, 
      IStackStyles, 
      DatePicker,
      Link, 
  } from "@gui/fluent-ui-allure";
  import * as React from "react";
    export const SampleBasic: React.FunctionComponent = () => {
      const [date, setDate] = React.useState<Date>();
      const pageStyles: IStackStyles = {
          root: {
              '.ms-DetailsRow': {
                  borderBottom: '1px solid #f3f2f1',
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
                          borderRadius: '50%',
                      }
                  },
  
                  '.ms-detailsList-name-tooltip': {
                      display: 'inline-block',
                  }
              }
          },
      }
  
      const onFormatDate = (date?: Date): string => {
          return !date ? "" : date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
      };
  
      return (
          <Stack styles={pageStyles}>
              <DatePicker
                  allowTextInput={true}
                  value={date}
                  formatDate={onFormatDate}
                  placeholder={"mm/dd/yyyy"}
                  onSelectDate={(newDate) => {
                      setDate(newDate);
                  }}
                  styles={{ root: { width: 280 } }}
                  onRenderFooter={() => {
                      return <Stack horizontal horizontalAlign="center" style={{ margin: 10 }} >
                          <Link underline onClick={() => setDate(new Date())}>{"Reset"}</Link>
                      </Stack>
                  }}
              />
          </Stack>
      );
  };`
  },
  {
    title: 'Date range (Recommended)',
    label:
      'A date range allows user to choose a start date from one calendar and then choose an end date from another calendar.',
    ui: <SampleDateRange />,
    code: `import { Stack, IStackStyles, DatePicker, Link } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleDateRange: React.FunctionComponent = () => {
        const [leftDate, setLeftDate] = React.useState<Date>();
        const [rightDate, setRightDate] = React.useState<Date>();
        const pageStyles: IStackStyles = {
            root: {
                ".ms-DetailsRow": {
                    borderBottom: "1px solid #f3f2f1",
                },
    
                ".ms-detailsList-item-wrap": {
                    padding: "10px 0",
    
                    ".ms-detailsList-status-wrap": {
                        display: "flex",
                        alignItems: "baseline",
    
                        ".ms-detailsList-status-tip": {
                            width: "6px",
                            height: "6px",
                            marginRight: "4px",
                            backgroundColor: "green",
                            borderRadius: "50%",
                        },
                    },
    
                    ".ms-detailsList-name-tooltip": {
                        display: "inline-block",
                    },
                },
            },
        };
    
        const onFormatDate = (date?: Date): string => {
            return !date ? "" : date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        };
    
        return (
            <Stack styles={pageStyles} horizontal tokens={{ childrenGap: 8 }}>
                <DatePicker
                    allowTextInput={true}
                    value={leftDate}
                    formatDate={onFormatDate}
                    placeholder={"mm/dd/yyyy"}
                    maxDate={rightDate}
                    onSelectDate={(newDate) => {
                        setLeftDate(newDate);
                    }}
                    styles={{ root: { width: 200 } }}
                    onRenderFooter={() => {
                        return (
                            <Stack horizontal horizontalAlign="center" style={{ margin: 10 }}>
                                <Link underline onClick={() => setLeftDate(new Date())}>
                                    {"Reset"}
                                </Link>
                            </Stack>
                        );
                    }}
                />
                <DatePicker
                    allowTextInput={true}
                    value={rightDate}
                    minDate={leftDate}
                    formatDate={onFormatDate}
                    placeholder={"mm/dd/yyyy"}
                    onSelectDate={(newDate) => {
                        setRightDate(newDate);
                    }}
                    styles={{ root: { width: 200 } }}
                    onRenderFooter={() => {
                        return (
                            <Stack horizontal horizontalAlign="center" style={{ margin: 10 }}>
                                <Link underline onClick={() => setRightDate(new Date())}>
                                    {"Reset"}
                                </Link>
                            </Stack>
                        );
                    }}
                />
            </Stack>
        );
    };`
  },
  {
    title: 'Date range',
    label:
      'A date range allows the user to choose a date range from two calendars. It lets the user select the same day; the range time will be 00:00 - 23:59.',
    ui: <SampleRange />,
    code: `import { addDays, DayOfWeek, getStartDateOfWeek, Link } from "@fluentui/react";
    import {
        Stack,
        IStackStyles,
        DateRangePicker,
        defaultDatePickerStrings,
        PrimaryButton
    } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleRange: React.FunctionComponent = () => {
        const pageStyles: IStackStyles = {
            root: {
                '.ms-DetailsRow': {
                    borderBottom: '1px solid #f3f2f1',
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
                            borderRadius: '50%',
                        }
                    },
    
                    '.ms-detailsList-name-tooltip': {
                        display: 'inline-block',
                    }
                }
            },
        }
    
        const [previousDate, setPreviousDate] = React.useState<Date>();
        const [nextDate, setNextDate] = React.useState<Date>();
        const [clickClearOrReset, setClickClearOrReset] = React.useState<boolean>(false);
        const previousDateRef = React.useRef<Date>();
        const nextDateRef = React.useRef<Date>();
    
        // Set default date
        // const [previousDate, setPreviousDate] = React.useState<Date>(getStartDateOfWeek(new Date(), DayOfWeek.Sunday));
        // const [nextDate, setNextDate] = React.useState<Date>(addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6));
        // const previousDateRef = React.useRef<Date>(getStartDateOfWeek(new Date(), DayOfWeek.Sunday));
        // const nextDateRef = React.useRef<Date>(addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6));
    
        // Please use the inner function based on project requirement
        const dateRangeRef: React.MutableRefObject<{ clearDate: () => void, dismissCalendar: () => void, setDateRange: (dateRange: { previousDate: Date, nextDate: Date }) => void }> = React.useRef();
        
        // It's the default demo requirement that selecting current week range.
        const setDateRange = () => {
            previousDateRef.current = getStartDateOfWeek(new Date(), DayOfWeek.Sunday);
            nextDateRef.current = addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6);
            setPreviousDate(previousDateRef.current);
            setNextDate(nextDateRef.current);
            setClickClearOrReset(true);
        }
    
        const clearDateRange = () => {
            previousDateRef.current = getStartDateOfWeek(new Date(), DayOfWeek.Sunday);
            nextDateRef.current = addDays(getStartDateOfWeek(new Date(), DayOfWeek.Sunday), 6);
            setPreviousDate(previousDateRef.current);
            setNextDate(nextDateRef.current);
            setClickClearOrReset(true);
        };
    
        const saveDateRange = () => {
            if (!clickClearOrReset) {
                setPreviousDate(previousDateRef.current);
                setNextDate(nextDateRef.current);
            }
            dateRangeRef?.current?.dismissCalendar();
            setClickClearOrReset(false);
        };
    
        // Use ref to call inner function to clear date value.
        // const setDateRange = () => {
        //     dateRangeRef.current.clearDate();
        // }
    
        // Use ref to call inner function to close the calendar callout.
        // If want to remain date value please pass value to dateRangeProps props.
        // const setDateRange = () => {
        //     dateRangeRef.current.dismissCalendar();
        //     dateRangeRef.current.setDateRange({ previousDate: previousDateRef.current, nextDate: nextDateRef.current });
        // }
    
        React.useEffect(() => {
            setClickClearOrReset(false);
        }, []);
    
        return (
            <Stack styles={pageStyles}>
                <DateRangePicker
                    ref={(ref: {
                        clearDate: () => void,
                        dismissCalendar: () => void,
                        setDateRange: (dateRange: { previousDate: Date, nextDate: Date }) => void
                    }) => {
                        if (ref) {
                            dateRangeRef.current = ref;
                        }
                    }}
                    strings={{
                        ...defaultDatePickerStrings,
                    }}
                    dateRangePickerId="uniqueId"
                    initialPickerDate={previousDate}
                    dateRangeProps={{ previousDate: previousDate, nextDate: nextDate, }}
                    onChangeDate={(previousDate: Date, nextDate: Date) => {
                        previousDateRef.current = previousDate;
                        nextDateRef.current = nextDate;
                        console.log(\`Date range is from \${previousDateRef.current} to \${nextDateRef.current}.\`);
                    }}
                    onRenderFooter={() => {
                        return (
                            <Stack horizontal verticalAlign="center" styles={{root: {margin: 16}}}>
                                <Stack grow={1}>
                                    <Link underline onClick={clearDateRange}>
                                    {"Clear"}
                                    </Link>
                                </Stack>
                                <Stack horizontal tokens={{childrenGap: 24}}>
                                    <Link underline onClick={setDateRange}>
                                        {"Reset"}
                                    </Link>
                                    <PrimaryButton text="OK" onClick={saveDateRange} />
                                </Stack>
                            </Stack>
                        );
                    }}
                />
            </Stack>
        );
    };`
  }
]
