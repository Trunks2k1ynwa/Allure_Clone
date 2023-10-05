import Heading from '@/atoms/heading'
import { dataCheckboxs } from './dataCheckboxs'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Checkbox = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Checkbox</Heading>
        <p>Checkbox is used to select one or more items from a set.</p>
      </div>
      {dataCheckboxs.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <div>{dataItem.lable && dataItem.lable.map((item, index) => <p key={`item ${index}`}>{item}</p>)}</div>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Checkbox
