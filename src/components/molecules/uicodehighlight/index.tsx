import React, { useEffect, useState } from 'react'
import './index.scss'
import UiHighLight from '~/components/atoms/uihightlight'
import CodeHighlight from '~/components/atoms/codehighlight'
import ButtonCode from '~/components/atoms/buttoncode'
type Props = {
  uiChildren: React.ReactNode
  codeString: string
}

const UiCodeHighLight = ({ uiChildren, codeString }: Props) => {
  const [showCode, setShowCode] = useState<boolean>(false)
  const [copy, setCopy] = useState<boolean>(false)
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false)
      }, 2000)
    }
  }, [copy])
  return (
    <section className='uicode-wrapper'>
      <UiHighLight>{uiChildren}</UiHighLight>
      <CodeHighlight copy={copy} setCopy={setCopy} showCode={showCode} codeString={codeString} />
      <ButtonCode showCode={showCode} setShowCode={setShowCode} />
    </section>
  )
}

export default UiCodeHighLight
