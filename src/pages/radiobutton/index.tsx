import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataRadioButtons } from './dataRadioButtons'

const RadioButton = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Radio button</Heading>
        <div>Radio button lets people select a single option from two or more choices.</div>
      </div>

      {dataRadioButtons.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          {dataItem.label && <p>{dataItem.label}</p>}
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default RadioButton
