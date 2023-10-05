import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataPaginations } from './dataPaginations'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'

const Pagination = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Filters</Heading>
        <div>
          Filters help the user find content easily and make their search for information less cumbersome. It is
          recommended to have a consistent behavior across your product. After doing the filter action, it needs a
          specific zone to show what the current filter conditions are, and there will be a number indicator on the left
          of the Filters action.
        </div>
      </div>
      {dataPaginations.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          {/* <div>{dataItem.label && dataItem.label.map((item, index) => <p key={`item ${index}`}>{item}</p>)}</div> */}
          <ErrorBoundary fallbackRender={FallbackRender}>
            <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
          </ErrorBoundary>
        </div>
      ))}
    </section>
  )
}

export default Pagination
