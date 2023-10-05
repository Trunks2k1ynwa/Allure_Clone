import * as React from 'react'
import { IStyleSet, Label } from '@fluentui/react'
import { Pivot, PivotItem } from '@gui/fluent-ui-allure'

const labelStyles: Partial<IStyleSet> = {
  root: { marginTop: 10 }
}

export const TabBasicView: React.FunctionComponent = () => {
  return (
    <Pivot overflowBehavior={'menu'} style={{ maxWidth: 210 }} aria-label='Basic Pivot Example'>
      <PivotItem
        headerText='Tab 1'
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title'
        }}
      >
        <Label styles={labelStyles}>Tab #1</Label>
      </PivotItem>
      <PivotItem headerText='Tab 2'>
        <Label styles={labelStyles}>Tab #2</Label>
      </PivotItem>
      <PivotItem headerText='Tab 3'>
        <Label styles={labelStyles}>Tab #3</Label>
      </PivotItem>
      <PivotItem headerText='Tab 4'>
        <Label styles={labelStyles}>Tab #4</Label>
      </PivotItem>
      <PivotItem headerText='Tab 5'>
        <Label styles={labelStyles}>Tab #5</Label>
      </PivotItem>
    </Pivot>
  )
}
