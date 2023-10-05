import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataMessages } from './dataMessages'

const Message = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Message</Heading>
        <div>
          A banner (MessageBar) displays errors, warnings, or important information about an open app or file. For
          example, if a file failed to upload an error message bar should appear.
        </div>
      </div>
      {dataMessages.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Message
