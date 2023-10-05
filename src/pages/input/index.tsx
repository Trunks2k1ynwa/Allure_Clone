import Heading from '@/atoms/heading'
import { dataInputs } from './dataInputs'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Input = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Input</Heading>
        <div>
          Input gives people a way to enter and edit text. They are used in forms, modal dialogs, tables, and other
          surfaces where text input is required.
        </div>
      </div>

      {dataInputs.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Input
