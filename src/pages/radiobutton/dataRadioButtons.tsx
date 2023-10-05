import { SampleVertical } from './ui/SampleVertical'
import { SampleBasic } from './ui/SampleBasic'
import { SampleDisable } from './ui/SampleDisable'

export const dataRadioButtons = [
  {
    title: 'Basic Usage',
    label: 'All options are visible by default to make it easier to select, so it should not have too many options.',
    ui: <SampleBasic />,
    code: `import * as React from "react";
    import { Stack, ChoiceGroup, IChoiceGroupOption } from "@gui/fluent-ui-allure";
    
    const option: IChoiceGroupOption[] = [
        { key: "A", text: "Option A" },
        { key: "B", text: "Option B" },
    ];
    
    export const SampleBasic = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <ChoiceGroup options={option} required={true} defaultSelectedKey={"A"} horizontal />
            </Stack>
        );
    };`
  },
  {
    title: 'Disable',
    ui: <SampleDisable />,
    code: `import * as React from "react";
    import { Stack, ChoiceGroup, IChoiceGroupOption } from "@gui/fluent-ui-allure";
    
    const option: IChoiceGroupOption[] = [
        { key: "A", text: "Option A" },
        { key: "B", text: "Option B" },
    ];
    
    export const SampleDisable = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <ChoiceGroup options={option} required={true} defaultSelectedKey={"A"} disabled horizontal />
            </Stack>
        );
    };`
  },
  {
    title: 'Vertical',
    ui: <SampleVertical />,
    code: `import * as React from "react";
    import { Stack, ChoiceGroup, IChoiceGroupOption } from "@gui/fluent-ui-allure";
    
    const option: IChoiceGroupOption[] = [
        { key: "A", text: "Option A" },
        { key: "B", text: "Option B" },
        { key: "C", text: "Option C" },
    ];
    
    export const SampleVertical = () => {
    
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <ChoiceGroup options={option} required={true} defaultSelectedKey={"A"} />
            </Stack>
        );
    };`
  }
]
