import Heading from '@/atoms/heading'
import { dataFileUploaders } from './dataFileUploaders'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'

const FileUploader = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>File Uploader</Heading>
        <p>Allow user to upload files from local place.</p>
      </div>
      <ErrorBoundary fallbackRender={FallbackRender}>
        {dataFileUploaders.map((dataItem, index) => (
          <div key={`item ${index}`} className='heading-wrapper'>
            <Heading type='subheading'>{dataItem.title}</Heading>
            <p>{dataItem.label}</p>
            <UiCodeHighLight codeString={dataItem.code} uiChildren={dataItem.ui} />
          </div>
        ))}
      </ErrorBoundary>
    </section>
  )
}

export default FileUploader
