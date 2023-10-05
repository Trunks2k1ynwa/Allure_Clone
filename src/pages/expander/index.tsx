import Heading from '@/atoms/heading'
import { dataExpanders } from './dataExpanders'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Expander = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Expander</Heading>
        <p>Allow the user to toggle display a section of content which can optimize the use of vertical space.</p>
      </div>

      {dataExpanders.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p>{dataItem.label}</p>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Expander
