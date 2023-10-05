import { Panel, DefaultButton } from '@gui/fluent-ui-allure'
import * as React from 'react'

function getTextWidth(text: string) {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (context) {
    context.font = 'bold 16px "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif'
  }

  const di = context?.measureText(text)
  const wi = di!.width
  return wi
}

export const WidePanelView = () => {
  const [isOpen, setOpenPanel] = React.useState(false)
  const style = {
    backgroundColor: '#FFF',
    padding: '15px'
  }
  const contentStyle = {
    content: {
      padding: 0,
      margin: '24px 40px'
    }
  }
  const headerTest = 'Panel heading(Wide) and text Overflow with long long long long long text'
  //custom show tooltip
  const isShow: boolean = getTextWidth(headerTest) > 548
  return (
    <div style={style}>
      <DefaultButton text='Open Panel' onClick={() => setOpenPanel(true)} />
      <Panel
        headerText={headerTest}
        isOpen={isOpen}
        styles={contentStyle}
        onDismiss={() => setOpenPanel(false)}
        size='Large'
        showTooltipCustom={isShow}
      ></Panel>
    </div>
  )
}
