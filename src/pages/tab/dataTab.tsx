import { TabBasicView } from './ui/TabBasicView'
import { TabCordView } from './ui/TabCardView'
import { VerticalTabView } from './ui/VerticalTabView'

export const dataTabs = [
  {
    title: 'Usage',
    label:
      'Do not display too many tabs at a time, user cannot remember more than 7-9 names. Collapse the rest of the tabs into "..." more action.',
    ui: <TabBasicView />,
    code: `import * as React from 'react';
    import { IStyleSet, Label, ILabelStyles } from '@fluentui/react';
    import { Pivot, PivotItem } from '@gui/fluent-ui-allure';
    
    const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
        root: { marginTop: 10 },
    };
    
    export const TabBasicView: React.FunctionComponent = () => {
        return (
            <Pivot
                overflowBehavior={'menu'}
                style={{ maxWidth: 210 }}
                aria-label="Basic Pivot Example">
                <PivotItem
                    headerText="Tab 1"
                    headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'My Files Title',
                    }}
                >
                    <Label styles={labelStyles}>Tab #1</Label>
                </PivotItem>
                <PivotItem headerText="Tab 2">
                    <Label styles={labelStyles}>Tab #2</Label>
                </PivotItem>
                <PivotItem headerText="Tab 3">
                    <Label styles={labelStyles}>Tab #3</Label>
                </PivotItem>
                <PivotItem headerText="Tab 4">
                    <Label styles={labelStyles}>Tab #4</Label>
                </PivotItem>
                <PivotItem headerText="Tab 5">
                    <Label styles={labelStyles}>Tab #5</Label>
                </PivotItem>
            </Pivot>
        );
    };`
  },
  {
    title: 'Card Style',
    label: 'Tabs are styled as cards. Choose a card-style tab according to your page layout.',
    ui: <TabCordView />,
    code: `import * as React from "react";
    import { Label } from "@fluentui/react";
    import { Pivot, PivotItem } from "@gui/fluent-ui-allure";
    const tabItemStyle = {
        height: 200,
        padding: 10,
    };
    export const TabCordView: React.FunctionComponent = () => {
        return (
            <Pivot overflowBehavior={"menu"} style={{ maxWidth: 357 }} linkFormat="tabs" styles={{ link: { width: 104 } }} aria-label="Links of Tab Style Pivot Example">
                <PivotItem style={tabItemStyle} headerText="Tab 1">
                    <Label>Tab #1</Label>
                </PivotItem>
                <PivotItem style={tabItemStyle} headerText="Tab 2">
                    <Label>Tab #2</Label>
                </PivotItem>
                <PivotItem style={tabItemStyle} headerText="Tab 3">
                    <Label>Tab #3</Label>
                </PivotItem>
                <PivotItem style={tabItemStyle} headerText="Tab 4">
                    <Label>Tab #4</Label>
                </PivotItem>
                <PivotItem style={tabItemStyle} headerText="Tab 5">
                    <Label>Tab #5</Label>
                </PivotItem>
            </Pivot>
        );
    };`
  },
  {
    title: 'TabCordView',
    label: 'TabCordView',
    ui: <VerticalTabView />,
    code: `import * as React from 'react';
    import { IPivotProps, Label, List, useTheme } from '@fluentui/react';
    import { DefaultButton, IExtendedPalette, PivotItem } from '@gui/fluent-ui-allure';
    
    const labelStyles = {
      root: { marginTop: 10 },
    };
    
    export const VerticalTabView: React.FunctionComponent = () => {
      return (
        <VerticalTab>
          <PivotItem headerText="Tab 1" itemKey="k1">
            <Label styles={labelStyles}>Tab #1</Label>
          </PivotItem>
          <PivotItem headerText="Tab 2" itemKey="k2">
            <Label styles={labelStyles}>Tab #2</Label>
          </PivotItem>
          <PivotItem headerText="Tab 3" itemKey="k3">
            <Label styles={labelStyles}>Tab #3</Label>
          </PivotItem>
          <PivotItem headerText="Tab 4" itemKey="k4">
            <Label styles={labelStyles}>Tab #4</Label>
          </PivotItem>
        </VerticalTab>
      );
    };
    
    const VerticalTab = (props: IPivotProps) => {
      const palette = useTheme().palette as IExtendedPalette;
      const [selectTabKey, setselectTabKey] = React.useState('k1');
      let mapLeft: PivotItem[];
    
      const onRenderCard = (item: PivotItem, index: number | undefined) => {
        return <DefaultButton
          key={\`tabitem-\${index}\`}
          styles={{
            root: [
              {
                height: 40,
                width: 180,
                borderRadius: 0,
                border: 'none',
                '.ms-Button-flexContainer': {
                  'justify-content': 'normal',
                  ".button-text": {
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
              borderLeftColor: item.props.itemKey === selectTabKey ? palette.themePrimary : \`\${palette.themePrimary}50\`
            },
          }}
          onClick={() => {
            setselectTabKey(item.props.itemKey);
          }}
        >{item.props.headerText}</DefaultButton>
      }
    
      const getLinkItems = function (props: IPivotProps) {
        mapLeft = props.children as PivotItem[];
        return mapLeft;
      };
    
      const onRunderRight = function (currectKey: string) {
        const currectItem: PivotItem = mapLeft.find(pivot => pivot.props.itemKey === currectKey);
        return currectItem.props.children;
      };
    
      return (
        <div style={{ height: 200, width: 360, display: 'flex' }} >
          <List
            key={\`list-tab-\${selectTabKey}\`}
            items={getLinkItems(props)}
            onRenderCell={onRenderCard}
          />
          <div style={{ height: 200, width: 180 }} >
            {/* {onRunderRight(selectTabKey)} */}
          </div>
        </div>
      );
    };
    `
  }
]
