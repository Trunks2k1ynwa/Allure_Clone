export const buttonCodes = {
  basicUsage: `import * as React from "react";
    import { Stack, DefaultButton, PrimaryButton, Link, TextButton, DashedButton } from "@gui/fluent-ui-allure";
    
    export const SampleBasic = () => {
        
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <TextButton title="Normal Button">Normal button</TextButton>
    
                <DefaultButton>Outline</DefaultButton>
    
                <PrimaryButton>Filled Button</PrimaryButton>
    
                <DashedButton>Dashed button</DashedButton>
    
                <Link underline>Link button</Link>
    
                
            </Stack>
        );
    };`,
  disable: `import * as React from "react";
    import { Stack, DefaultButton, PrimaryButton, Link, IconButton, TextButton, DashedButton, Toggle, TooltipHost } from "@gui/fluent-ui-allure";
    
    export const SampleDisable = () => {
        const [enableFocus, setEnableFocus] = React.useState(false);
        return (
            <Stack>
                <Toggle
                    checked={enableFocus}
                    onChange={(_, checked) => {
                        setEnableFocus(checked);
                    }}
                    label="Enable focus on disabled buttons"
                    inlineLabel
                />
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <TextButton allowDisabledFocus={enableFocus} disabled>
                            Normal button
                        </TextButton>
                    </TooltipHost>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <DefaultButton allowDisabledFocus={enableFocus} disabled>
                            Outline
                        </DefaultButton>
                    </TooltipHost>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <DefaultButton allowDisabledFocus={enableFocus} disabled iconProps={{ iconName: "fas-rotate-right" }}>
                            Outline
                        </DefaultButton>
                    </TooltipHost>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <PrimaryButton allowDisabledFocus={enableFocus} disabled>
                            Filled button
                        </PrimaryButton>
                    </TooltipHost>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <PrimaryButton allowDisabledFocus={enableFocus} disabled iconProps={{ iconName: "fas-rotate-right" }}>
                            Filled button
                        </PrimaryButton>
                    </TooltipHost>
                    <TooltipHost styles={{ root: {display: 'flex !important'}}} content="This button is disabled because we set disabled property">
                        <Link disabled>Link button</Link>
                    </TooltipHost>{" "}
                    {/*disabled link doesn't support get focus */}
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <DashedButton allowDisabledFocus={enableFocus} disabled>
                            Dashed button
                        </DashedButton>
                    </TooltipHost>
                    <TooltipHost content="This button is disabled because we set disabled property">
                        <IconButton allowDisabledFocus={enableFocus} bordered disabled iconProps={{ iconName: "fas-bell" }}></IconButton>
                    </TooltipHost>
                </Stack>
            </Stack>
        );
    };`,
  iconButton: `import * as React from "react";
    import { Stack, DefaultButton, PrimaryButton, IconButton, DashedButton, TextButton } from "@gui/fluent-ui-allure";
    
    export const SampleIcon = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <DefaultButton iconProps={{ iconName: "fas-rotate-right" }}>Outline</DefaultButton>
    
                <PrimaryButton iconProps={{ iconName: "fas-rotate-right" }}>Filled button</PrimaryButton>
    
                <DashedButton iconProps={{ iconName: "fas-plus" }}>Dashed button</DashedButton>
    
                <IconButton bordered iconProps={{ iconName: "fas-layer-group" }}></IconButton>
    
    
                <TextButton style={{minWidth: 0}} iconProps={{ iconName: "fas-layer-group" }}></TextButton>
            </Stack>
        );
    };`,
  contextMenu: `import * as React from "react";
    import { Stack, DefaultButton, PrimaryButton, IconButton, IContextualMenuProps } from "@gui/fluent-ui-allure";
    
    export const SampleContextMenu = () => {
        const menuProps: IContextualMenuProps = {
            items: [
                {
                    key: "k1",
                    text: "Email message",
                    iconProps: { iconName: "fas-envelope" },
                },
                {
                    key: "k2",
                    text: "Calendar event",
                    iconProps: { iconName: "fas-calendar-days" },
                    subMenuProps: {
                        calloutProps: {
                            gapSpace: 5
                        },
                        gapSpace: 5,
                        items: [
                            {
                                key: "k2-1",
                                text: "Meeting",
                                iconProps: { iconName: "fas-envelope" },
                            },
                            {
                                key: "k2-2",
                                text: "Startup",
                                iconProps: { iconName: "fas-envelope" },
                            },
                        ]
                    }
                },
            ],
            directionalHintFixed: true,
        };
    
        return (
            <Stack horizontal tokens={{ childrenGap: 16 }}>
                <DefaultButton menuProps={menuProps}>Outline</DefaultButton>
    
                <DefaultButton iconProps={{ iconName: "fas-rotate-right" }} menuProps={menuProps}>Outline</DefaultButton>
    
    
                <PrimaryButton menuProps={menuProps}>Button Group</PrimaryButton>
    
                <IconButton bordered iconProps={{ iconName: "fas-ellipsis" }} menuProps={menuProps} styles={{ menuIcon: { display: "none" } }}></IconButton>
            </Stack>
        );
    };`,
  loading: `import * as React from "react";
    import { Stack, DefaultButton, PrimaryButton, IconButton, IContextualMenuProps, TextButton, DashedButton } from "@gui/fluent-ui-allure";
    
    export const SampleLoading = () => {
        const [busy, setBusy] = React.useState(false);
        return (
            <Stack tokens={{childrenGap: 16}}>
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                    <PrimaryButton busy={busy}>Filled button</PrimaryButton>
                    <PrimaryButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
                        Filled button
                    </PrimaryButton>
    
                    <DefaultButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>
                        Outline
                    </DefaultButton>
    
                    <IconButton busy={busy} bordered iconProps={{ iconName: "fas-bell" }}></IconButton>
    
                    {/* <TextButton busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>Text Button</TextButton> */}
    
                    {/* <DashedButton  busy={busy} iconProps={{ iconName: "fas-rotate-right" }}>Dashed Button</DashedButton> */}
    
                    <PrimaryButton onClick={() => setBusy(!busy)}>Toggle Busy</PrimaryButton>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 16 }}>
                    <PrimaryButton busy={busy} busyText="Loading">Filled button</PrimaryButton>
                    <PrimaryButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>
                        Filled button
                    </PrimaryButton>
    
                    <DefaultButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>
                        Outline
                    </DefaultButton>
    
                    {/* <TextButton busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>Text Button</TextButton> */}
    
                    {/* <DashedButton  busy={busy} busyText="Loading" iconProps={{ iconName: "fas-rotate-right" }}>Dashed Button</DashedButton> */}
    
                </Stack>
            </Stack>
        );
    };`
}
