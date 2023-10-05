import { SampleBasic } from './ui/SampleBasic'
import { SampleDisabled } from './ui/SampleDisabled'

export const dataSwitchs = [
  {
    title: 'Basic Usage',
    label: [
      '1. The user can turn things on/off or show/hide.',
      '2. Keep descriptive text short and concise',
      '3. Provide two sizes now.'
    ],
    ui: <SampleBasic />,
    code: `import * as React from "react";
    import { Stack, Toggle } from "@gui/fluent-ui-allure";
    
    export const SampleBasic = () => {
        const [largeChecked, setLargeChecked] = React.useState(true);
        const [smallChecked, setSmallChecked] = React.useState(true);
        return (
            <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 20 }}>
                <Toggle checked={largeChecked} onChange={(_, checked) => { setLargeChecked(checked) }}  />
                <Toggle checked={smallChecked} onChange={(_, checked) => { setSmallChecked(checked) }} size="small" />
            </Stack>
        );
    };`
  },
  {
    title: 'Disable',
    ui: <SampleDisabled />,
    code: `import * as React from "react";
    import { Stack, Toggle } from "@gui/fluent-ui-allure";
    
    export const SampleDisabled = () => {
        return (
            <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 20 }}>
                <Toggle checked disabled />
                <Toggle disabled />
                <Toggle checked disabled size="small" />
                <Toggle disabled size="small" />
            </Stack>
        );
    };`
  }
]
