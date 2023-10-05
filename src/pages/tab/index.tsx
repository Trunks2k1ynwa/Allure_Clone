import Heading from '@/atoms/heading'
import { dataTabs } from './dataTab'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Tab = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Tab</Heading>
        <p>Tabs keeps related content in a single container that is shown and hidden through navigation.</p>
      </div>
      {dataTabs.map((tab, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{tab.title}</Heading>
          <p>{tab.label}</p>
          <UiCodeHighLight codeString={tab.code} uiChildren={tab.ui} />
        </div>
      ))}
    </section>
  )
}

export default Tab
