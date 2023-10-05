import { Sample } from './ui/SampleBasic'
import { SampleOverflow } from './ui/SampleContent'
import { SampleDirection } from './ui/SampleCustom'
export const dataToolTips = [
  {
    title: 'Basic Usage',
    label:
      'For an icon without text, a dot in a chart, a disabled reason for some action, table key column all can use a tooltip.',
    rule: true,
    subLabel:
      'For some long text where the space is not enough to show all, will show … when it exceeds the limitation, if they are important, can consider using a tooltip. For example, page title. If not, you can consider using the title style (default browser default style). For example, an item in one selection.',
    ui: <Sample />,
    code: `import * as React from 'react';
    import { DefaultButton, Tooltip, TooltipHost, Stack } from '@gui/fluent-ui-allure';
    
    export const Sample = () => {
    
        const [tooltipContent, setTooltipContent] = React.useState<string>('');
    
        function onTooltipToggle(visible: boolean) {
            if (!visible) {
                setTooltipContent('');
            }
        }
    
        return (
            <Stack horizontal tokens={{childrenGap: 20}}>
                <TooltipHost content={<div>This is <br /> tooltip.</div>}>
                    <DefaultButton>Hover me</DefaultButton>
                </TooltipHost>
    
                <TooltipHost content="This is tooltip.">
                    <DefaultButton disabled>Hover this disabled button</DefaultButton>
                </TooltipHost>
                
                <TooltipHost onTooltipToggle={visible => onTooltipToggle(visible)} content={tooltipContent}>
                    <DefaultButton onClick={() => setTooltipContent('This is tooltip.')}>Click me</DefaultButton>
                </TooltipHost>
                
            </Stack>
        );
    };`
  },
  {
    title: 'Custom placement',
    rule: false,
    ui: <SampleDirection />,
    code: `import * as React from "react";
    import { DefaultButton, DirectionalHint, TooltipHost, Stack, ITooltipProps } from "@gui/fluent-ui-allure";
    
    export const SampleDirection = () => {
        const buttonStyle: React.CSSProperties = {
            width: 100,
            marginBottom: 10,
        };
    
        const tooltipProps: ITooltipProps = {
            onRenderContent: () => (
              <div>
                  <div>This is a customized content tooltip.</div>
                  <div>Use directionalHint to specify direction.</div>
              </div>
            ),
          };
    
        return (
            <Stack style={{ width: 550 }}>
                <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="center">
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.topLeftEdge}>
                        <DefaultButton style={buttonStyle}>Top Left</DefaultButton>
                    </TooltipHost>
                    <TooltipHost content="This is pure text tooltip." directionalHint={DirectionalHint.topCenter}>
                        <DefaultButton style={buttonStyle}>Top</DefaultButton>
                    </TooltipHost>
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.topRightEdge}>
                        <DefaultButton style={buttonStyle}>Top Right</DefaultButton>
                    </TooltipHost>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="space-between">
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftTopEdge}>
                        <DefaultButton style={buttonStyle}>Left Top</DefaultButton>
                    </TooltipHost>
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightTopEdge}>
                        <DefaultButton style={buttonStyle}>Right Top</DefaultButton>
                    </TooltipHost>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="space-between">
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftCenter}>
                        <DefaultButton style={buttonStyle}>Left</DefaultButton>
                    </TooltipHost>
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightCenter}>
                        <DefaultButton style={buttonStyle}>Right</DefaultButton>
                    </TooltipHost>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="space-between">
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftBottomEdge}>
                        <DefaultButton style={buttonStyle}>Left Bottom</DefaultButton>
                    </TooltipHost>
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightBottomEdge}>
                        <DefaultButton style={buttonStyle}>Right Bottom</DefaultButton>
                    </TooltipHost>
                </Stack>
                <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="center">
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.bottomLeftEdge}>
                        <DefaultButton style={buttonStyle}>Bottom Left</DefaultButton>
                    </TooltipHost>
                    <TooltipHost content="This is pure text tooltip." directionalHint={DirectionalHint.bottomCenter}>
                        <DefaultButton style={buttonStyle}>Bottom</DefaultButton>
                    </TooltipHost>
                    <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.bottomRightEdge}>
                        <DefaultButton style={buttonStyle}>Bottom Right</DefaultButton>
                    </TooltipHost>
                </Stack>
            </Stack>
        );
    };`
  },
  {
    title: 'Content overflows',
    rule: false,
    ui: <SampleOverflow />,
    code: `import * as React from "react";
    import { TooltipHost, Stack } from "@gui/fluent-ui-allure";
    
    export const SampleOverflow = () => {
        return (
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <TooltipHost
                    calloutProps={{ isBeakVisible: false }}
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt voluptates placeat culpa eligendi, ad quidem numquam voluptas odit cumque nisi est delectus odio cum magni praesentium quos expedita maiores!"
                >
                    <p style={{ width: 200, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt voluptates placeat culpa eligendi, ad quidem numquam voluptas odit cumque nisi est delectus odio cum magni
                        praesentium quos expedita maiores!
                    </p>
                </TooltipHost>
            </Stack>
        );
    };`
  }
]
