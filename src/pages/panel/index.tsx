import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataPenels } from './dataPenels'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'

const Panel = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Panel</Heading>
        <div>A panel is used to provide supplemental information or form inputs that relate to the main content.</div>
      </div>
      <ErrorBoundary fallbackRender={FallbackRender}>
        {dataPenels.map((dataItem, index) => (
          <div key={`item ${index}`} className='heading-wrapper'>
            <Heading type='subheading'>{dataItem.title}</Heading>
            <p>{dataItem.label}</p>
            {dataItem.rule && <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Rule</span>}
            {dataItem.rule && <p>{dataItem.subLable}</p>}
            <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
          </div>
        ))}
      </ErrorBoundary>
    </section>
  )
}

export default Panel
