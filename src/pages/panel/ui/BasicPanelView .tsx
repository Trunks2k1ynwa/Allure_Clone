import { DefaultButton, Panel } from '@gui/fluent-ui-allure'
import * as React from 'react'
export const BasicPanelView = () => {
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

  return (
    <div style={style}>
      <DefaultButton text='Open Panel' onClick={() => setOpenPanel(true)} />
      <Panel
        styles={contentStyle}
        headerText='Panel heading'
        isOpen={isOpen}
        onDismiss={() => setOpenPanel(false)}
      ></Panel>
    </div>
  )
}
