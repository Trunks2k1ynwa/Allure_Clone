import Heading from '@/atoms/heading'
import { dataDatePickers } from './dataDatePickers'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'

const DatePicker = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>DatePicker</Heading>
        <p>Date picker is used to select a date or a range of dates.</p>
      </div>
      {dataDatePickers.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p>{dataItem.label}</p>
          <ErrorBoundary fallbackRender={FallbackRender}>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
          </ErrorBoundary>
        </div>
      ))}
    </section>
  )
}

export default DatePicker
