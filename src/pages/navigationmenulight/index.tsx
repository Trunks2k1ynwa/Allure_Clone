import Heading from '@/atoms/heading'
import { dataNavigation } from './dataNavigation'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const NavigationMenuLight = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Navigation Menu Light</Heading>
        <p>Navigation menu is the list of links that the user can always access.</p>
      </div>
      <div className='heading-wrapper'>
        <Heading>Usage</Heading>
        <ul style={{ listStyle: 'number', paddingLeft: '20px' }}>
          <li>
            Which contains the main functions links. A main function navigation can have sub-navigation items by using a
            hierarchy style.
          </li>
          <li>
            Icons in the navigation bar serve as a visual affordance that indicates the item is actionable. For example,
            when hovering a navigation item, it will appear lighter blue color as the background.
          </li>
          <li>
            If a navigation item is a group, it does not have the function to access other pages. Only can expand or
            collapse the navigation item group.
          </li>
        </ul>
      </div>
      {dataNavigation.map((data, index) => (
        <div key={`item ${index}`}>
          <UiCodeHighLight codeString={data.code} uiChildren={data.ui} />
        </div>
      ))}
    </section>
  )
}

export default NavigationMenuLight
