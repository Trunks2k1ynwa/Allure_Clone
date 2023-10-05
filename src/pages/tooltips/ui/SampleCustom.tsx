import * as React from 'react'
import { DefaultButton, DirectionalHint, TooltipHost, Stack, ITooltipProps } from '@gui/fluent-ui-allure'

export const SampleDirection = () => {
  const buttonStyle: React.CSSProperties = {
    width: 100,
    marginBottom: 10
  }

  const tooltipProps: ITooltipProps = {
    onRenderContent: () => (
      <div>
        <div>This is a customized content tooltip.</div>
        <div>Use directionalHint to specify direction.</div>
      </div>
    )
  }

  return (
    <Stack style={{ width: 550 }}>
      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='center'>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.topLeftEdge}>
          <DefaultButton style={buttonStyle}>Top Left</DefaultButton>
        </TooltipHost>
        <TooltipHost content='This is pure text tooltip.' directionalHint={DirectionalHint.topCenter}>
          <DefaultButton style={buttonStyle}>Top</DefaultButton>
        </TooltipHost>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.topRightEdge}>
          <DefaultButton style={buttonStyle}>Top Right</DefaultButton>
        </TooltipHost>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='space-between'>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftTopEdge}>
          <DefaultButton style={buttonStyle}>Left Top</DefaultButton>
        </TooltipHost>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightTopEdge}>
          <DefaultButton style={buttonStyle}>Right Top</DefaultButton>
        </TooltipHost>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='space-between'>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftCenter}>
          <DefaultButton style={buttonStyle}>Left</DefaultButton>
        </TooltipHost>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightCenter}>
          <DefaultButton style={buttonStyle}>Right</DefaultButton>
        </TooltipHost>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='space-between'>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.leftBottomEdge}>
          <DefaultButton style={buttonStyle}>Left Bottom</DefaultButton>
        </TooltipHost>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.rightBottomEdge}>
          <DefaultButton style={buttonStyle}>Right Bottom</DefaultButton>
        </TooltipHost>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign='center'>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.bottomLeftEdge}>
          <DefaultButton style={buttonStyle}>Bottom Left</DefaultButton>
        </TooltipHost>
        <TooltipHost content='This is pure text tooltip.' directionalHint={DirectionalHint.bottomCenter}>
          <DefaultButton style={buttonStyle}>Bottom</DefaultButton>
        </TooltipHost>
        <TooltipHost tooltipProps={tooltipProps} directionalHint={DirectionalHint.bottomRightEdge}>
          <DefaultButton style={buttonStyle}>Bottom Right</DefaultButton>
        </TooltipHost>
      </Stack>
    </Stack>
  )
}
