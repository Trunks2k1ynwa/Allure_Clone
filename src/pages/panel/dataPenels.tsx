import { BasicPanelView } from './ui/BasicPanelView '
import { ExtraPanelView } from './ui/ExtraPanelView '
import { WidePanelView } from './ui/WidePanelView '
import { SecondaryPanelView } from './ui/onRenderFooterContent '

export const dataPenels = [
  {
    title: 'Basic usage',
    label: 'A panel is docked to the right side of a viewpoint.',
    rule: true,
    subLable:
      'The header and bottom buttons are fixed to the top/bottom of the panel. When the content becomes overflowed, the panel body will provide scrolling.',
    ui: <BasicPanelView />,
    code: `import { DefaultButton, IPanelStyles, Panel } from "@gui/fluent-ui-allure";
    import * as React from "react";
    export const BasicPanelView = () => {
      const [isOpen, setOpenPanel] = React.useState(false);
      const style = {
        backgroundColor: "#FFF",
        padding: "15px",
      };
      const contentStyle = {
        content: {
          padding: 0,
          margin: "24px 40px",
        },
      }
    
      return (<div style={style}>
        <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
        <Panel
          styles={contentStyle}
          headerText="Panel heading"
          isOpen={isOpen}
          onDismiss={() => setOpenPanel(false)}
        >
        </Panel>
      </div>
      );
    };
    `
  },
  {
    title: 'Wide',
    label:
      'Use the panel when the main page content extends beyond the boundaries of the viewpoint. example: view details or create or edit',
    ui: <WidePanelView />,
    code: `import { Panel, DefaultButton } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    function getTextWidth(text: string) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = 'bold 16px "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif';
      const di = context.measureText(text);
      const wi = di.width;
      return wi;
    }
    
    export const WidePanelView = () => {
      const [isOpen, setOpenPanel] = React.useState(false);
      const style = {
        backgroundColor: "#FFF",
        padding: "15px",
      };
      const contentStyle = {
        content: {
          padding: 0,
          margin: "24px 40px",
        },
      }
      const headerTest = "Panel heading(Wide) and text Overflow with long long long long long text";
      //custom show tooltip
      const isShow: boolean = getTextWidth(headerTest) > 548;
      return (<div style={style}>
        <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
        <Panel
          headerText={headerTest}
          isOpen={isOpen}
          styles={contentStyle}
          onDismiss={() => setOpenPanel(false)}
          size='Large'
          showTooltipCustom={isShow}
        >
        </Panel>
      </div>
      );
    };`
  },
  {
    title: 'Extra',
    label:
      'Wide panel is not so enough to show a table, or some controls need more horizontal space, then can use extra panel.',
    ui: <ExtraPanelView />,
    code: `import { Panel, DefaultButton } from "@gui/fluent-ui-allure";
    import * as React from "react";
    
    function getTextWidth(text: string) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = 'bold 16px "Open Sans", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif';
      const di = context.measureText(text);
      const wi = di.width;
      return wi;
    }
    
    export const ExtraPanelView = () => {
      const [isOpen, setOpenPanel] = React.useState(false);
      const style = {
        backgroundColor: "#FFF",
        padding: "15px",
      };
      const contentStyle = {
        content: {
          padding: 0,
          margin: "24px 40px",
        },
      }
      const headerTest = "Panel heading(Extra)";
      //custom show tooltip
      const isShow: boolean = getTextWidth(headerTest) > 548;
      return (<div style={style}>
        <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
        <Panel
          headerText={headerTest}
          isOpen={isOpen}
          styles={contentStyle}
          onDismiss={() => setOpenPanel(false)}
          size='Extra'
          showTooltipCustom={isShow}
        >
        </Panel>
      </div>
      );
    };
    `
  },
  {
    title: 'Secondary panel',
    label: 'The secondary panel still uses the initial panel, but it provides a "back" button next to the title.',
    ui: <SecondaryPanelView />,
    code: `import { Panel, DefaultButton, TextButton, IconButton, PrimaryButton, TooltipHost, DirectionalHint } from "@gui/fluent-ui-allure";
    import * as React from "react";
    export const SecondaryPanelView = () => {
      const [isOpen, setOpenPanel] = React.useState(false);
      const [isOpenSecondary, setOpenSecondary] = React.useState(false);
      const style = {
        backgroundColor: "#FFF",
        padding: "15px",
      };
      const headerTestStyle = {
        fontWeight: "bold",
        fontSize: 16,
        height: 40,
        lineHeight: '40px',
        margin: 0,
        "white-space": "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginRight: "auto"
      };
      const headerStyle = {
        display: 'flex',
        marginRight: 'auto'
    
      };
      const contentStyle = {
        content: {
          padding: 0,
          margin: "24px 40px",
        },
      }
      const footerStyle = {
        height: 90,
        display: 'flex',
        marginLeft: 'auto',
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 32
    
      };
      const onRenderFooterContent =
        () => (
          <div style={footerStyle}>
            <DefaultButton
              style={{ width: 74, minWidth: 74 }}
              onClick={() => setOpenSecondary(false)}
            >Discard</DefaultButton>
            <PrimaryButton
              style={{ marginLeft: 8, width: 60, minWidth: 60 }}
              onClick={() => {
                setOpenSecondary(false)
                setOpenPanel(false)
              }}
            > Apply </PrimaryButton>
          </div>
        )
      return (<div style={style}>
        <DefaultButton text="Open Panel" onClick={() => setOpenPanel(true)} />
        <Panel
          key={'panel-one'}
          headerText="Panel heading"
          styles={contentStyle}
          isOpen={isOpen}
          onDismiss={() => setOpenPanel(false)}
        >
          <DefaultButton text="Secondary panel" onClick={() => setOpenSecondary(true)} />
          <Panel
            key={'panel-Secondary'}
            onRenderHeader={() => {
              return <div style={headerStyle}>
                <TextButton style={{ minWidth: 0, marginRight: 8 }} iconProps={{ iconName: "fas-arrow-left", styles: { root: { fontSize: 16 } } }} onClick={() => setOpenSecondary(false)}></TextButton>
                <TooltipHost
                  styles={{
                    root: {
                      width: 300,
                    }
                  }}
                  content={"Secondary panel heading with long long long long long text"}
                  directionalHint={DirectionalHint.bottomLeftEdge}
                >
                  <p style={headerTestStyle}>Secondary panel heading with long long long long long text</p>
                </TooltipHost>
              </div>;
            }}
            isOpen={isOpenSecondary}
            onDismiss={() => setOpenSecondary(false)}
            onRenderFooter={onRenderFooterContent}
            isBlocking={false}
            isFooterAtBottom={true}
          >
          </Panel>
        </Panel>
      </div>
      );
    };`
  }
]
