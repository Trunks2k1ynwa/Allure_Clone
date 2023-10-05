import { SampleDismiss } from './ui/SampleDismiss'
import { SampleMultiline } from './ui/SampleMultiline'
import { SampleBasic } from './ui/SampleBasic'

export const dataMessages = [
  {
    title: 'Basic Usage',
    ui: <SampleBasic />,
    code: `import * as React from "react";

    export const SampleBasic = () => {
        return (
            <Stack tokens={{ childrenGap: 20 }}>
                <MessageBar messageBarType={MessageBarType.info}>
                    Information message content with nothing else.
                </MessageBar>
    
                <MessageBar messageBarType={MessageBarType.severeWarning}>
                Warning message content with nothing else.
                </MessageBar>
                <MessageBar messageBarType={MessageBarType.error}>Error message content with nothing else.</MessageBar>
            </Stack>
        );
    };`
  },
  {
    title: 'Multiline message',
    ui: <SampleMultiline />,
    code: `import { MessageBar, MessageBarType, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleMultiline = () => {
        return (
            <Stack style={{width: 320}} tokens={{ childrenGap: 20 }}>
                <MessageBar messageBarType={MessageBarType.info} isMultiline>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aliquid similique laudantium reiciendis omnis libero reprehenderit velit est ullam numquam, maxime quisquam dolor. Architecto, sed ipsum distinctio quibusdam fugit neque?
                </MessageBar>
    
                <MessageBar messageBarType={MessageBarType.severeWarning} isMultiline>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nesciunt iusto. Eos quibusdam, libero, itaque culpa ipsam odit doloremque omnis reprehenderit quis eaque cumque sequi hic! Sequi iusto ad quas.
                </MessageBar>
                <MessageBar messageBarType={MessageBarType.error} isMultiline>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam similique, dolores illum rem facilis, est animi saepe fugit, voluptates nulla. Eveniet fugit, animi perspiciatis expedita tempora sunt accusamus facilis.
                </MessageBar>
            </Stack>
        );
    };`
  },
  {
    title: 'With dismiss button',
    ui: <SampleDismiss />,
    code: `import { MessageBar, MessageBarType, Stack } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    export const SampleDismiss = () => {
        return (
            <Stack tokens={{ childrenGap: 20 }}>
                <MessageBar messageBarType={MessageBarType.info}>
                    Harum, aliquid similique laudantium reiciendis omnis libero reprehenderit velit est ullam numquam, maxime quisquam dolor. 
                </MessageBar>
    
                <MessageBar messageBarType={MessageBarType.severeWarning}>
                    Distinctio, nesciunt iusto. Eos quibusdam, libero, itaque culpa ipsam odit doloremque omnis reprehenderit.
                </MessageBar>
                <MessageBar messageBarType={MessageBarType.error}>
                    Error veniam similique, dolores illum rem facilis, est animi saepe fugit, voluptates nulla. 
                </MessageBar>
            </Stack>
        );
    };`
  }
]
