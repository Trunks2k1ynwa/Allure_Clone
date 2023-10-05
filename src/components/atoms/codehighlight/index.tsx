import { TooltipHost } from '@gui/fluent-ui-allure'
import './index.scss'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
type Props = {
  codeString: string
  showCode?: any
  style?: any
  setCopy: (a: boolean) => void
  copy?: boolean
}

const CodeHighlight = ({ codeString, showCode, style, setCopy, copy }: Props) => {
  if (copy) {
    const textArea = document.createElement('textarea')
    textArea.value = codeString
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
  }
  return (
    <section style={style} className={`wrapper-code ${showCode ? 'show' : 'hidden'}`}>
      <div className='copy-icon'>
        <TooltipHost content={<div>{copy ? 'Copied' : 'Copy'}</div>}>
          <div onClick={() => setCopy(true)}>
            {!copy && <i className='fa-regular fa-clipboard' />}
            {copy && <i className='fa-solid fa-clipboard-check' />}
          </div>
        </TooltipHost>
      </div>
      <SyntaxHighlighter language='react' style={a11yLight}>
        {codeString}
      </SyntaxHighlighter>
    </section>
  )
}

export default CodeHighlight
