import { Panel, DefaultButton, TextButton, PrimaryButton, TooltipHost, DirectionalHint } from '@gui/fluent-ui-allure'
import * as React from 'react'
export const SecondaryPanelView = () => {
  const [isOpen, setOpenPanel] = React.useState(false)
  const [isOpenSecondary, setOpenSecondary] = React.useState(false)
  const style = {
    backgroundColor: '#FFF',
    padding: '15px'
  }
  const headerTestStyle = {
    fontWeight: 'bold',
    fontSize: 16,
    height: 40,
    lineHeight: '40px',
    margin: 0,
    'white-space': 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: 'auto'
  }
  const headerStyle = {
    display: 'flex',
    marginRight: 'auto'
  }
  const contentStyle = {
    content: {
      padding: 0,
      margin: '24px 40px'
    }
  }
  const footerStyle = {
    height: 90,
    display: 'flex',
    marginLeft: 'auto',
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 32
  }
  const onRenderFooterContent = () => (
    <div style={footerStyle}>
      <DefaultButton style={{ width: 74, minWidth: 74 }} onClick={() => setOpenSecondary(false)}>
        Discard
      </DefaultButton>
      <PrimaryButton
        style={{ marginLeft: 8, width: 60, minWidth: 60 }}
        onClick={() => {
          setOpenSecondary(false)
          setOpenPanel(false)
        }}
      >
        {' '}
        Apply{' '}
      </PrimaryButton>
    </div>
  )
  return (
    <div style={style}>
      <DefaultButton text='Open Panel' onClick={() => setOpenPanel(true)} />
      <Panel
        key={'panel-one'}
        headerText='Panel heading'
        styles={contentStyle}
        isOpen={isOpen}
        onDismiss={() => setOpenPanel(false)}
      >
        <DefaultButton text='Secondary panel' onClick={() => setOpenSecondary(true)} />
        <Panel
          key={'panel-Secondary'}
          onRenderHeader={() => {
            return (
              <div style={headerStyle}>
                <TextButton
                  style={{ minWidth: 0, marginRight: 8 }}
                  iconProps={{ iconName: 'fas-arrow-left', styles: { root: { fontSize: 16 } } }}
                  onClick={() => setOpenSecondary(false)}
                ></TextButton>
                <TooltipHost
                  styles={{
                    root: {
                      width: 300
                    }
                  }}
                  content={'Secondary panel heading with long long long long long text'}
                  directionalHint={DirectionalHint.bottomLeftEdge}
                >
                  <p style={headerTestStyle}>Secondary panel heading with long long long long long text</p>
                </TooltipHost>
              </div>
            )
          }}
          isOpen={isOpenSecondary}
          onDismiss={() => setOpenSecondary(false)}
          onRenderFooter={onRenderFooterContent}
          isBlocking={false}
          isFooterAtBottom={true}
        ></Panel>
      </Panel>
    </div>
  )
}
