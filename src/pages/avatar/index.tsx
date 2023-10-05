import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataAvatars } from './dataAvatars'

const Avatar = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Avatar</Heading>
        <p>An avatar component represents a user, an object or entity.</p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>When to use</Heading>
        <p>
          Displays a list of personas. Each circle represents a person and contains their image or initials. Often this
          control is used when sharing who has access to a specific view or file, or when assigning someone a task
          within a workflow.
        </p>
        Do not use it when:
        <div>
          <p>1. User or group is not the primary information you want to display in a table or list.</p>
          <p>2. There is not enough space to display it.</p>
        </div>
      </div>
      {dataAvatars.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p>{dataItem.label}</p>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Avatar
