import Heading from '@/atoms/heading'
import { dataPeoplePickers } from './dataPeoplePickers'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const PeoplePicker = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>PeoplePicker</Heading>
        <div>
          People picker is used to select one or more entities, such as people or groups, from a list. It makes
          composing an email to someone or adding them to a group easily if you do not know their full name or email
          address.
        </div>
      </div>

      {dataPeoplePickers.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default PeoplePicker
