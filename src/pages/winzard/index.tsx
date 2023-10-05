import Heading from '@/atoms/heading'
import SampleVertical from './ui/SampleVertical'

const Wizard = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Winzard</Heading>
        <p>Wizard is a progress indicator that communicates to the user the progress of a particular process.</p>
      </div>
      <div className='heading-wrapper'>
        <Heading>When to use</Heading>
        <p>
          Use a wizard when a user needs to fill or operate a lot of content, especially when this content has hierarchy
          relationships.
        </p>
      </div>

      <div className='heading-wrapper'>
        <Heading>Vertical Wizard</Heading>
        <p>
          The vertical wizard offers room for growth. It can be extended if one step contains sub-steps, or the number
          of steps increases.
        </p>
        <SampleVertical />
      </div>
    </section>
  )
}

export default Wizard
