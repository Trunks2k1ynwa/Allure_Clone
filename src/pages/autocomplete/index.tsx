import Heading from '@/atoms/heading'
import { dataAutoCompletes } from './dataAutoComplete'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const AutoComplete = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>AutoComplete</Heading>
        <p>
          The date field can be automatically filled or show users an option list that stored previous information, such
          as a user's name or address. When a user enters a value, the selection control can auto-load the matched
          results.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>When to use</Heading>
        <p>1. Use auto-complete field when the user tends to use the data that he/she already entered before.</p>
        <p>2. Search for matched values from list</p>
        <p>3. Global search, anything that matched the keywords will be displayed</p>
      </div>
      {dataAutoCompletes.map((dataAutoComplete, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataAutoComplete.title}</Heading>
          <p>{dataAutoComplete.label}</p>
          <UiCodeHighLight codeString={dataAutoComplete.code} uiChildren={dataAutoComplete.ui} />
        </div>
      ))}
    </section>
  )
}

export default AutoComplete
