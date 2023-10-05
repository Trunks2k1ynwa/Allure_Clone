import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataTables } from './dataTables'

const Table = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Avatar</Heading>
        <div>An avatar component represents a user, an object or entity.</div>
      </div>
      {dataTables.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p key={`item ${index}`}>{dataItem.label}</p>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Table
