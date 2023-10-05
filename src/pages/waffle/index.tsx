import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const WaffleUi = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Waffle</Heading>
        <p>
          Online products can switch to other products easily. At least there will be one product: AOS. Don't display
          expired products in waffle.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic Usage</Heading>
        <UiCodeHighLight
          uiChildren={<SampleBasic />}
          codeString={`import * as React from "react";
import { Stack, Waffle } from "@gui/fluent-ui-allure";

export const SampleBasic = () => {
    const cards = [
        {
            displayName: "AvePoint Online Services",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/aos_32x32.png",
            productType: -1,
            url: "https://aos.sharepointguild.com/home/index",
        },
        {
            displayName: "Cloud Index",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_index_32x32.png",
            productType: 19,
            url: "https://aos.sharepointguild.com/home/index",
        },
        {
            displayName: "Cloud Management",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_management_32x32.png",
            productType: 12,
            url: "https://aos.sharepointguild.com/home/index",
        },
        {
            displayName: "Confide",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/confide_32x32.png",
            productType: 28,
            url: "https://aos.sharepointguild.com/home/index"
        },
        {
            displayName: "FLY",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/fly_32x32.png",
            productType: 24,
            url: "https://aos.sharepointguild.com/home/index",
        },
        {
            displayName: "IBM Spectrum Protect Plus Online Services for Microsoft 365",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/cense_32x32.png",
            url: "https://aos.sharepointguild.com/home/index",
            hiddenIcon: true
        },
        {
            displayName: "Policy for Microsoft 365",
            isExpired: false,
            productIconBase64: "https://res.cdn.avepointonlineservices.com/onlineproductlogo/pi_32x32.png",
            productType: 23,
            url: "https://aos.sharepointguild.com/home/index",
        },
    ]

    return (
        <Stack horizontal tokens={{ childrenGap: 16 }}>
            <Waffle
                productCards={cards}
                title={"Other online services"}
                height={430}
            />
        </Stack>
    );
};`}
        />
      </div>
    </section>
  )
}

export default WaffleUi
import { Stack, Waffle } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  const cards = [
    {
      displayName: 'AvePoint Online Services',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/aos_32x32.png',
      productType: -1,
      url: 'https://aos.sharepointguild.com/home/index'
    },
    {
      displayName: 'Cloud Index',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_index_32x32.png',
      productType: 19,
      url: 'https://aos.sharepointguild.com/home/index'
    },
    {
      displayName: 'Cloud Management',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/cloud_management_32x32.png',
      productType: 12,
      url: 'https://aos.sharepointguild.com/home/index'
    },
    {
      displayName: 'Confide',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/confide_32x32.png',
      productType: 28,
      url: 'https://aos.sharepointguild.com/home/index'
    },
    {
      displayName: 'FLY',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/fly_32x32.png',
      productType: 24,
      url: 'https://aos.sharepointguild.com/home/index'
    },
    {
      displayName: 'IBM Spectrum Protect Plus Online Services for Microsoft 365',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/cense_32x32.png',
      url: 'https://aos.sharepointguild.com/home/index',
      hiddenIcon: true
    },
    {
      displayName: 'Policy for Microsoft 365',
      isExpired: false,
      productIconBase64: 'https://res.cdn.avepointonlineservices.com/onlineproductlogo/pi_32x32.png',
      productType: 23,
      url: 'https://aos.sharepointguild.com/home/index'
    }
  ]

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Waffle productCards={cards} title={'Other online services'} height={430} />
    </Stack>
  )
}
