import { Link } from 'react-router-dom'
import { iconcodes } from './iconcodes'
import {
  FontAwesomeBasicCustomColor,
  FontAwesomeBasicUiFabric,
  FontAwesomeUiFabricCustomColor,
  SampleFontAwesomeBasic
} from './IconComponent'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import Heading from '@/atoms/heading'

const Icon = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Icon</Heading>
        <div>
          Font awesome V6 free
          <Link to='https://fontawesome.com/v6/search?m=free&s=regular%2Csolid'>
            https://fontawesome.com/v6/search?m=free&s=regular%2Csolid
          </Link>
        </div>
        <p>
          For Microsoft - Office UI Fabric Icons
          <Link to='https://uifabricicons.azurewebsites.net/'>https://uifabricicons.azurewebsites.net/</Link>
        </p>
        <p>
          Icon provides visual context and enhances usability. It is often used as an action. Display the icon when it
          is available. Otherwise, they will be disabled. Always use a show full name when hovering on an icon, there
          will be a tooltip to display its full name.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Font awesome basic usage</Heading>
        <UiCodeHighLight codeString={iconcodes.SampleFontAwesomeBasic} uiChildren={<SampleFontAwesomeBasic />} />
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Font awesome with custom color</Heading>
        <UiCodeHighLight
          codeString={iconcodes.FontAwesomeBasicCustomColor}
          uiChildren={<FontAwesomeBasicCustomColor />}
        />
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Font awesome with custom color</Heading>
        <UiCodeHighLight codeString={iconcodes.FontAwesomeBasicUiFabric} uiChildren={<FontAwesomeBasicUiFabric />} />
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Font awesome with custom color</Heading>
        <UiCodeHighLight
          codeString={iconcodes.FontAwesomeUiFabricCustomColor}
          uiChildren={<FontAwesomeUiFabricCustomColor />}
        />
      </div>
    </section>
  )
}

export default Icon
