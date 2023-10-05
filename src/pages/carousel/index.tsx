import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { Carousel } from '@gui/fluent-ui-allure'

const CarouselUI = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Carousel</Heading>
        <div>A carousel allows multiple images to loop play in a fixed-size space.</div>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic usage</Heading>
        <p>
          A carousel is used to display a set of flat images. The maximum recommended number is 5 images and only shows
          one image at a time. It switches automatically every 3 seconds, or you can switch it manually with an
          indicator below. This indicator can also indicate the total number of images, and which one is currently being
          displayed.
        </p>
      </div>
      <UiCodeHighLight
        uiChildren={<SampleBasic />}
        codeString={`import * as React from 'react';
        import { Carousel } from '@gui/fluent-ui-allure';
        const demoStyle = {
            color: 'white',
            paddingTop: 130,
            fontSize: 20,
            height: '100%',
            width: '100%',
            background: '#0072D0'
        }
        const carouselItems = [
            <div style={demoStyle}> 1 </div>,
            <div style={demoStyle}> 2 </div>,
            <div style={demoStyle}> 3 </div>];
        export const SampleBasic = () => {
            function onRenderCarouselItems() {
                return carouselItems;
            }
            return (
                <Carousel
                    carouselItems={onRenderCarouselItems()}
                    carouseWidth={900}
                    carouseHeight={300}
                    autoPlay={true}
                    delay={3}
                    speed={0.5}
                />
            );
        };`}
      />
    </section>
  )
}

export default CarouselUI

const demoStyle = {
  color: 'white',
  paddingTop: 130,
  fontSize: 20,
  height: '100%',
  width: '100%',
  background: '#0072D0'
}
const carouselItems = [
  <div style={demoStyle}> 1 </div>,
  <div style={demoStyle}> 2 </div>,
  <div style={demoStyle}> 3 </div>
]
export const SampleBasic = () => {
  function onRenderCarouselItems() {
    return carouselItems
  }
  return (
    <Carousel
      carouselItems={onRenderCarouselItems()}
      carouseWidth={900}
      carouseHeight={300}
      autoPlay={true}
      delay={3}
      speed={0.5}
    />
  )
}
