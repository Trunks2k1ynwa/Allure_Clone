import Heading from '@/atoms/heading'
import { typography } from './dataTypography'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const Typography = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Typoraphy</Heading>
        <p>This is a component for displaying text. You can use this to standardize text across your system.</p>
        <div></div>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Letter Spacing</Heading>
        <p>Letter Spacing</p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Font Convention</Heading>
        <UiCodeHighLight codeString={typography.codeString} uiChildren={typography.element} />
      </div>
    </section>
  )
}

export default Typography
