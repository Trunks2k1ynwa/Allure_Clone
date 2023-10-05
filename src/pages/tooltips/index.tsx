import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataToolTips } from './dataToolTips'

const Tooltips = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Tooltip</Heading>
        <div>
          A good tooltip briefly describes unlabeled controls or provides a bit of additional information about labeled
          controls, when this is useful.
        </div>
      </div>
      {dataToolTips.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <p key={`item ${index}`}>{dataItem.label}</p>
          {dataItem.rule && <strong>Rule :</strong>}
          {dataItem.rule && <p>{dataItem.subLabel}</p>}
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Tooltips
