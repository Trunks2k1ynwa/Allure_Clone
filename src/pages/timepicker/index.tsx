import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataTimePickers } from './dataTimePickers'

const TimePicker = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>TimePicker</Heading>
        <p>The time picker is used to select time.</p>
      </div>
      {dataTimePickers.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p key={`item ${index}`}>{dataItem.label}</p>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default TimePicker
