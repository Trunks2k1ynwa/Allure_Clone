import { SampleTwelveHoursSystem } from './ui/SampleTwelveHoursSystem'
import { SampleBasic } from './ui/SampleBasic'
import { SampleInterval } from './ui/SampleInterval'

export const dataTimePickers = [
  {
    title: 'Basic Usage',
    label: 'Let the user pick a specific time point.',
    ui: <SampleTwelveHoursSystem />,
    code: `import * as React from "react";
    import { Stack, TimePicker } from "@gui/fluent-ui-allure";
    
    export const SampleTwelveHoursSystem = () => {
        const [value, setValue] = React.useState<string>();
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <TimePicker 
                    id={"time-picker-am"} 
                    twelveHoursSystem={true}
                    formatTime="HH:mm AM"
                    placeholder="HH:mm AM"
                    onConfirmClick={(time) => setValue(time)} 
                    value={value} 
                    onClearClick={() => {setValue("08:10 AM")}}
                />
            </Stack>
        );
    };`
  },
  {
    title: 'Basic Usage',
    label: 'Let the user pick a specific time point.',
    ui: <SampleBasic />,
    code: `import * as React from "react";
    import { Stack, TimePicker } from "@gui/fluent-ui-allure";
    
    export const SampleBasic = () => {
        const [value, setValue] = React.useState<string>();
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <TimePicker 
                    id={"time-picker"} 
                    twelveHoursSystem={false} 
                    formatTime="HH:mm"
                    placeholder="HH:mm"
                    onConfirmClick={(time) => setValue(time)} 
                    value={value} 
                    allowTextInput
                    onClearClick={() => {setValue("08:10")}}
                />
            </Stack>
        );
    };`
  },
  {
    title: 'Basic Usage',
    label: 'Let the user pick a specific time point.',
    ui: <SampleInterval />,
    code: `import * as React from "react";
    import { Stack, TimePicker } from "@gui/fluent-ui-allure";
    
    export const SampleInterval = () => {
        const [value, setValue] = React.useState<string>();
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <TimePicker 
                    id={"time-interval-picker"} 
                    twelveHoursSystem={true} 
                    onConfirmClick={(time) => setValue(time)} 
                    value={value} 
                    allowTextInput
                    fiveMinutesInterval
                />
            </Stack>
        );
    };`
  }
]
