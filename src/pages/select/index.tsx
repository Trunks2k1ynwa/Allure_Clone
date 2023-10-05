import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataSelects } from './dataSelects'

const Select = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Select</Heading>
        <p>
          Select one or more options from a list, and if there are too many options, provide the search function at the
          top.
        </p>
      </div>
      {dataSelects.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <div>{dataItem.label && dataItem.label.map((item, index) => <p key={`item ${index}`}>{item}</p>)}</div>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Select
