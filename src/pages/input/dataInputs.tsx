import { SampleDisabled } from './ui/SampleDisabled'
import { SampleDisabledTextArea } from './ui/SampleDisabledTextArea'
import { SampleError } from './ui/SampleError'
import { SampleSearch } from './ui/SampleSearch'
import { SampleTextArea } from './ui/SampleTextArea'
import { SampleBasic } from './ui/SampleBasic'

export const dataInputs = [
  {
    title: 'Basic Usage',
    ui: <SampleBasic />,
    code: `import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleBasic = () => {
        const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField styles={styles}/>
            </Stack>
        );
    };`
  },
  {
    title: 'Disabled',
    ui: <SampleDisabled />,
    code: `import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleDisabled = () => {
        const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField styles={styles} disabled value="Disabled"/>
            </Stack>
        );
    };`
  },
  {
    title: 'Text area',
    ui: <SampleTextArea />,
    code: `import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleTextArea = () => {
        const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField styles={styles} multiline resizable={false}/>
            </Stack>
        );
    };`
  },
  {
    title: 'Disable Text area',
    ui: <SampleDisabledTextArea />,
    code: `import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleDisabledTextArea = () => {
        const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField styles={styles} disabled multiline resizable={false} value="Your text area content goes here." />
            </Stack>
        );
    };`
  },
  {
    title: 'Error',
    ui: <SampleError />,
    code: `import { ITextFieldStyles, Stack, TextField } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleError = () => {
        const styles: Partial<ITextFieldStyles> = { root: { width: 280 } };
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TextField styles={styles} errorMessage={"This field is required"} placeholder="input"/>
            </Stack>
        );
    };`
  },
  {
    title: 'Search',
    ui: <SampleSearch />,
    code: `import { ISearchBoxStyles, SearchBox, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleSearch = () => {
        const styles: Partial<ISearchBoxStyles> = { root: { height: 40 }, box: { width: 240 } };
        const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { height: 32 }, box: { width: 240 }, iconButton: { top: 4 } };
        const [value, setValue] = React.useState<string>("");
        const [firstSearchValue, setFirstSearchValue] = React.useState<string>("");
        return (
            <Stack tokens={{ childrenGap: 20 }}>
                <Stack>
                    <SearchBox styles={styles} placeholder="Search..." value={firstSearchValue} onSearch={(v) => console.log(v)} onChange={(ev, v) => setFirstSearchValue(v)} />
                </Stack>
                <Stack>
                    <SearchBox styles={searchBoxStyles} placeholder="Search..." value={value} onChange={(ev, v) => setValue(v)} />
                </Stack>
                <Stack>
                    <SearchBox styles={searchBoxStyles} showIcon placeholder="Search..." />
                </Stack>
            </Stack>
        );
    };`
  }
]
