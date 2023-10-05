import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataFilters } from './dataFilters'

const Filters = () => {
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
      {dataFilters.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p key={`item ${index}`}>{dataItem.label}</p>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Filters
