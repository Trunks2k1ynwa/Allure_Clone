import { Link } from 'react-router-dom'
import Heading from '@/atoms/heading'
import UiCodeHighLight from '~/components/molecules/uicodehighlight'

import { buttonCodes } from './buttonCode'
import { SampleBasic, SampleContextMenu, SampleDisable, SampleIcon, SampleLoading } from './ButtonComponent'

const Button = () => {
  return (
    <section>
      <div className='heading-title heading-wrapper'>
        <Heading type='heading'>Button</Heading>
        <p>Use Button to perform a specific action.</p>
      </div>
      <div className='heading-subtitle heading-wrapper'>
        <Heading type='subheading'>When to use</Heading>
        <p>Use Primary buttons in situations where uers may need to:</p>
        <ul>
          <li>Submit a form (Submit , Apply, Save, OK, Cancel, Close)</li>
          <li>Begin a new task (Start, Create) - Specify a new or next step in a process (Back, Next)</li>
          <li>Others which are important</li>
        </ul>
        <p>
          Primary button always on the right . Please refer to principle{' '}
          <Link to='https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/'>Gutenburg diagram</Link>
          Gutenburg diagram (https://3.7designs.co/blog/2009/01/03/the-gutenburg-diagram-in-design/)
        </p>
        <div className='heading-wrapper'>
          <Heading type='subheading'>Basic Usage</Heading>
          <p>
            Buttons are clickable items used to perform an action. It is better to make the recommended action on the
            page to be the primary button. In general, a button always has these five statuses: normal, hover, clicked,
            focused and disabled.
          </p>
          <UiCodeHighLight codeString={buttonCodes.basicUsage} uiChildren={<SampleBasic />} />
        </div>
        <div className='heading-wrapper'>
          <Heading type='subheading'>Disable</Heading>
          <UiCodeHighLight codeString={buttonCodes.disable} uiChildren={<SampleDisable />} />
        </div>
        <div className='heading-wrapper'>
          <Heading type='subheading'>Icon Button</Heading>
          <UiCodeHighLight codeString={buttonCodes.iconButton} uiChildren={<SampleIcon />} />
        </div>
        <div className='heading-wrapper'>
          <Heading type='subheading'>Context Menu</Heading>
          <UiCodeHighLight codeString={buttonCodes.contextMenu} uiChildren={<SampleContextMenu />} />
        </div>
        <div className='heading-wrapper'>
          <Heading type='subheading'>Loading</Heading>
          <UiCodeHighLight codeString={buttonCodes.loading} uiChildren={<SampleLoading />} />
        </div>
      </div>
    </section>
  )
}

export default Button
