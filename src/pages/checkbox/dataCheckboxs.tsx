import { SampleCheckAll } from './ui/SampleCheckAll'
import { SampleDisabled } from './ui/SampleDisabled'
import { SampleBasic } from './ui/SampleBasic'

export const dataCheckboxs = [
  {
    title: 'Basic Usage',
    lable: [
      '1. Use only one checkbox when you need to agree on some conditions or terms. Such as: Do not show again, I agree on terms...',
      '2. Use checkboxes when the user can select multiple items, such as: select items from a table.'
    ],
    ui: <SampleBasic />,
    code: `import { Checkbox, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleBasic = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <Checkbox label="check box" />
            </Stack>
        );
    };`
  },
  {
    title: 'Disabled',
    ui: <SampleDisabled />,
    code: `import { Checkbox, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleDisabled = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <Checkbox label="Check box" disabled />
                <Checkbox label="Check box" disabled checked />
            </Stack>
        );
    };`
  },
  {
    title: 'Check all',
    ui: <SampleCheckAll />,
    code: `import { Checkbox, ICheckboxStyles, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export enum ECheckOption {
        OptionA = 1,
        OptionB = 2,
        OptionC = 3,
    }
    export interface ICheckOptionModel {
        key?: ECheckOption;
        value?: boolean;
    }
    
    const selectAllOptions: ICheckOptionModel[] = [
        { key: ECheckOption.OptionA, value: true },
        { key: ECheckOption.OptionB, value: true },
        { key: ECheckOption.OptionC, value: true },
    ];
    
    export const SampleCheckAll = () => {
        const [selectAll, setSelectAll] = React.useState(true);
        const [indeterminate, setIndeterminate] = React.useState(false);
        const [selectOptions, setSelectOptions] = React.useState<ICheckOptionModel[]>(selectAllOptions);
        const styles: Partial<ICheckboxStyles> = {
            root: {
                marginLeft: "0 !important",
                marginTop: 4,
            },
        };
    
        const firstStyles: Partial<ICheckboxStyles> = {
            root: {
                width: 81,
                marginLeft: "0 !important",
                paddingBottom: 8,
                borderBottom: "1px solid #f2f3f4",
            },
        };
    
        const style: React.CSSProperties = {
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            fontSize: 32,
            color: "#171D24",
        };
    
        function getSelectOptionsValue(option: ECheckOption) {
            const options = selectOptions.filter((i) => i.key === option);
            return options.length ? options[0].value : false;
        }
    
        function changeSelectOptions(option: ECheckOption) {
            const newSelectOptions = selectOptions.map((i) => {
                if (i.key === option) {
                    i.value = !i.value;
                }
                return i;
            });
            const length = newSelectOptions.filter((i) => i.value).length;
            setIndeterminate(length <= 2 && length > 0);
            setSelectAll(length === 3);
            setSelectOptions(newSelectOptions);
        }
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }} style={style}>
                <Checkbox
                    label="Select All"
                    styles={firstStyles}
                    checked={selectAll}
                    indeterminate={indeterminate}
                    onChange={() => {
                        const value = indeterminate ? indeterminate : !selectAll;
                        const options: ICheckOptionModel[] = [
                            { key: ECheckOption.OptionA, value },
                            { key: ECheckOption.OptionB, value },
                            { key: ECheckOption.OptionC, value },
                        ];
                        setSelectAll(value);
                        setIndeterminate(false);
                        setSelectOptions(options);
                    }}
                />
                <Checkbox label="Option A" styles={styles} checked={getSelectOptionsValue(ECheckOption.OptionA)} onChange={() => changeSelectOptions(ECheckOption.OptionA)} />
                <Checkbox label="Option B" styles={styles} checked={getSelectOptionsValue(ECheckOption.OptionB)} onChange={() => changeSelectOptions(ECheckOption.OptionB)} />
                <Checkbox label="Option C" styles={styles} checked={getSelectOptionsValue(ECheckOption.OptionC)} onChange={() => changeSelectOptions(ECheckOption.OptionC)} />
            </Stack>
        );
    };`
  }
]
