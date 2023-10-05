import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { dataProgress } from './dataProgress'

const Progress = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Progress</Heading>
        <div>
          Progress Indicators are used to show the completion status of an operation lasting more than 2 seconds. If the
          state of progress cannot be determined, use a Spinner instead. Progress Indicators can appear in a new panel,
          a flyout, under the UI initiating the operation.
        </div>
      </div>
      {dataProgress.map((dataItem, index) => (
        <div key={`item ${index}`} className='heading-wrapper'>
          <Heading type='subheading'>{dataItem.title}</Heading>
          <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
        </div>
      ))}
    </section>
  )
}

export default Progress
