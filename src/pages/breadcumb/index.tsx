import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataBreadcrumb } from './dataBreadcrumb'
import './index.scss'
import Heading from '@/atoms/heading'

const Breadcumb = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Breadcrumb</Heading>
        <div>
          It display by the page hierarchy and allows user to know where they are. Better to have this breadcrumb
          navigation except for homepage.
        </div>
        <p>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Don't use when:</span>
        </p>
        <ul style={{ paddingLeft: '0px', listStyle: 'outside', margin: '0', listStyleType: 'none' }}>
          <li>- Product has no logical hierarchy</li>
          <li>- There are too many navigation options that are very close together.</li>
          <li>- Breadcrumb cannot replace the primary navigation.</li>
        </ul>
      </div>
      {dataBreadcrumb.map((breads, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading>{breads.title}</Heading>
          {breads.elements?.map((bread, index) => (
            <div key={`item ${index}`} className='ui-wrapper'>
              <div className='label-wrapper'>{bread.label}</div>
              <UiCodeHighLight codeString={bread.code} uiChildren={bread.ui} />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Breadcumb
