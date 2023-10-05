import { SampleBar } from './ui/SampleBar '
import { SampleCircle } from './ui/SampleCircle'
import { SampleStatic } from './ui/SampleStatic'

export const dataProgress = [
  {
    title: 'Progress bar',
    ui: <SampleBar />,
    code: `import * as React from "react";
    import { Stack, Progress } from "@gui/fluent-ui-allure";
    
    export const SampleBar = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 80 }}>
                <Stack tokens={{ childrenGap: 16 }}>
                    <Progress
                        size={256}
                        percent={0}
                    ></Progress>
                    <Progress
                        size={256}
                        percent={85}
                    ></Progress>
                    <Progress
                        size={256}
                        percent={100}
                        status='success'
                        text='Successfully'
                    ></Progress>
                    <Progress
                        size={256}
                        percent={70}
                        status='failed'
                        text='Upload failed'
                    ></Progress>
                </Stack>
                <Stack tokens={{ childrenGap: 24 }}>
                    <Progress
                        size={256}
                        percent={0}
                        textDirectional='bottom'
                    ></Progress>
                    <Progress
                        size={256}
                        percent={85}
                        textDirectional='bottom'
                    ></Progress>
                    <Progress
                        size={256}
                        percent={100}
                        status='success'
                        text='Successfully'
                        textDirectional='bottom'
                    ></Progress>
                    <Progress
                        size={256}
                        percent={70}
                        status='failed'
                        text='Upload failed'
                        textDirectional='bottom'
                    ></Progress>
                </Stack>
            </Stack>
        );
    };`
  },
  {
    title: 'Progress bar',
    ui: <SampleCircle />,
    code: `import * as React from "react";
    import { Stack, Progress } from "@gui/fluent-ui-allure";
    
    export const SampleCircle = () => {
        return (
            <Stack tokens={{ childrenGap: 80 }}>
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={0}
                        styles={{ circleIcon: { fontSize: 36 }, circleText: { fontSize: 24 } }}
                    ></Progress>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={85}
                    ></Progress>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={85}
                        showIconInprogress={true}
                    ></Progress>
    
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={100}
                        status={'success'}
                    ></Progress>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={100}
                        status={'warning'}
                    ></Progress>
                    <Progress
                        progressType="circle"
                        size={120}
                        percent={100}
                        status={'failed'}
                    ></Progress>
                </Stack>
            </Stack>
        );
    };`
  },
  {
    title: 'Progress bar',
    ui: <SampleStatic />,
    code: `import * as React from "react";
    import { Stack, Progress } from "@gui/fluent-ui-allure";
    
    export const SampleStatic = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 80 }}>
                <Progress
                    progressType="static"
                    size={256}
                    section={4}
                    percent={25}
                    text="Completion Degree: 25%"
                ></Progress>
            </Stack>
        );
    };`
  }
]
