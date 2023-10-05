import { Dialog, TooltipHost } from '@fluentui/react'
import { DialogType, Icon } from '@gui/fluent-ui-allure'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './index.scss'
import { LegacyRef, useRef } from 'react'
import Tooltip from './Tooltip'
type Props = {
  isModalClosed: boolean
  setModalClosed(a: boolean): void
  classname: string
}
const ModalIcon = ({ isModalClosed, setModalClosed, classname }: Props) => {
  return (
    <div>
      <Dialog
        hidden={isModalClosed}
        onDismiss={() => setModalClosed(true)}
        dialogContentProps={{ showCloseButton: true, type: DialogType.close }}
        title=''
        maxWidth='730px'
        minWidth='730px'
      >
        <div className='modal-icon'>
          <div className='modal-content'>
            <div className='modal-content_name'>
              <Tooltip code={classname} hover='Copy Icon Name'>
                {classname}
              </Tooltip>
            </div>
            <div className='modal-content_subdetail'>
              <Tooltip code={classname} hover='Copy Glyph'>
                <Icon iconName={classname} />
              </Tooltip>
              <Tooltip code='EA01' hover='Copy Unicode'>
                <span className='modal-subdetail_unicode'>EA01</span>
              </Tooltip>
            </div>
            <div className='modal-main'>
              <div className='main-icon_img'>
                <Icon iconName={classname} />
              </div>
              <div className='main-icon_code'>
                <span>HTML code</span>
                <Tooltip code={`<i class="${classname}"></i>`} hover='Copy Code Snipped'>
                  <SyntaxHighlighter language='react' style={docco}>
                    {`<i class="${classname}"></i>`}
                  </SyntaxHighlighter>
                </Tooltip>

                <span>React code</span>
                <Tooltip code={`<Icon iconName='${classname}' />`} hover='Copy Code Snipped'>
                  <SyntaxHighlighter language='react' style={docco}>
                    {`<Icon iconName='${classname}' />`}
                  </SyntaxHighlighter>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default ModalIcon
