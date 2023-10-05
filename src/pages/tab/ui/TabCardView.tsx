import * as React from 'react'
import { Label } from '@fluentui/react'
import { Pivot, PivotItem } from '@gui/fluent-ui-allure'
const tabItemStyle = {
  height: 200,
  padding: 10
}
export const TabCordView: React.FunctionComponent = () => {
  return (
    <Pivot
      overflowBehavior={'menu'}
      style={{ maxWidth: 357 }}
      linkFormat='tabs'
      styles={{ link: { width: 104 } }}
      aria-label='Links of Tab Style Pivot Example'
    >
      <PivotItem style={tabItemStyle} headerText='Tab 1'>
        <Label>Tab #1</Label>
      </PivotItem>
      <PivotItem style={tabItemStyle} headerText='Tab 2'>
        <Label>Tab #2</Label>
      </PivotItem>
      <PivotItem style={tabItemStyle} headerText='Tab 3'>
        <Label>Tab #3</Label>
      </PivotItem>
      <PivotItem style={tabItemStyle} headerText='Tab 4'>
        <Label>Tab #4</Label>
      </PivotItem>
      <PivotItem style={tabItemStyle} headerText='Tab 5'>
        <Label>Tab #5</Label>
      </PivotItem>
    </Pivot>
  )
}
