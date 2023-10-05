import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataSwitchs } from './dataSwitchs'

const Switch = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Switch</Heading>
        <p>Allow the user to choose between two mutually exclusive options.</p>
      </div>

      {dataSwitchs.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <div>{dataItem.label && dataItem.label.map((item, index) => <p key={`item ${index}`}>{item}</p>)}</div>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Switch
