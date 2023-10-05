import Heading from '@/atoms/heading'
import { dataTrees } from './dataTree'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Tree = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Tree</Heading>
        <p>Which can be used in a complex hierarchy to emphasize the whole structure.</p>
      </div>
      {dataTrees.map((tab, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{tab.title}</Heading>
          <UiCodeHighLight codeString={tab.code} uiChildren={tab.ui} />
        </div>
      ))}
    </section>
  )
}

export default Tree
