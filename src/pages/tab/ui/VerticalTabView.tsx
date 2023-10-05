import * as React from 'react'
import { IPivotProps, Label, List, useTheme } from '@fluentui/react'
import { DefaultButton, IExtendedPalette, PivotItem } from '@gui/fluent-ui-allure'

const labelStyles = {
  root: { marginTop: 10 }
}

export const VerticalTabView: React.FunctionComponent = () => {
  return (
    <VerticalTab>
      <PivotItem headerText='Tab 1' itemKey='k1'>
        <Label styles={labelStyles}>Tab #1</Label>
      </PivotItem>
      <PivotItem headerText='Tab 2' itemKey='k2'>
        <Label styles={labelStyles}>Tab #2</Label>
      </PivotItem>
      <PivotItem headerText='Tab 3' itemKey='k3'>
        <Label styles={labelStyles}>Tab #3</Label>
      </PivotItem>
      <PivotItem headerText='Tab 4' itemKey='k4'>
        <Label styles={labelStyles}>Tab #4</Label>
      </PivotItem>
    </VerticalTab>
  )
}

const VerticalTab = (props: IPivotProps) => {
  const palette = useTheme().palette as IExtendedPalette
  const [selectTabKey, setselectTabKey] = React.useState<string | undefined>('k1')
  let mapLeft: PivotItem[]

  const onRenderCard = (item: PivotItem, index: number | undefined) => {
    return (
      <DefaultButton
        key={`tabitem-${index}`}
        styles={{
          root: [
            {
              height: 40,
              width: 180,
              borderRadius: 0,
              border: 'none',
              '.ms-Button-flexContainer': {
                'justify-content': 'normal',
                '.button-text': {
                  paddingLeft: 2
                }
              },
              boxSizing: 'border-box',
              borderLeftColor: item.props.itemKey === selectTabKey ? palette.themePrimary : 'transparent',
              borderLeftWidth: 2,
              borderLeftStyle: 'solid',
              color: item.props.itemKey === selectTabKey ? palette.themePrimary : palette.slate,
              fontWeight: item.props.itemKey === selectTabKey ? 600 : 400,
              ':active': {
                backgroundColor: 'transparent'
              }
            }
          ],
          rootHovered: {
            backgroundColor: 'transparent',
            color: item.props.itemKey === selectTabKey ? palette.themePrimary : palette.slate,
            borderLeftColor: item.props.itemKey === selectTabKey ? palette.themePrimary : `${palette.themePrimary}50`
          }
        }}
        onClick={() => {
          setselectTabKey(item.props.itemKey)
        }}
      >
        {item.props.headerText}
      </DefaultButton>
    )
  }

  const getLinkItems = function (props: IPivotProps) {
    mapLeft = props.children as PivotItem[]
    return mapLeft
  }

  return (
    <div style={{ height: 200, width: 360, display: 'flex' }}>
      <List key={`list-tab-${selectTabKey}`} items={getLinkItems(props)} onRenderCell={onRenderCard} />
      <div style={{ height: 200, width: 180 }}>{/* {onRunderRight(selectTabKey)} */}</div>
    </div>
  )
}
