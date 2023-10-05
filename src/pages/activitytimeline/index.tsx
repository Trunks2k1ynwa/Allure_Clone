import Heading from '@/atoms/heading'
import * as React from 'react'
import { ActivityItem, FontIcon, IExtendedPalette, Icon, useTheme } from '@gui/fluent-ui-allure'
import UiCodeHighLight from '@/molecules/uicodehighlight'

const ActivityTimeline = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>Activity timeline</Heading>
        <p>
          Activity timeline can be used to show a series of information that need to order by time. As the time goes by
          it usually emphasis the activity changes .
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic usage</Heading>
        <UiCodeHighLight
          uiChildren={<SampleBasic />}
          codeString={`import * as React from "react";
          import { ActivityItem, FontIcon, IExtendedPalette, Icon, useTheme } from "@gui/fluent-ui-allure";
          
          const nameStyle: React.CSSProperties = {
              fontWeight: "bold",
          };
          
          export const SampleBasic = () => {
              const palette = useTheme().palette as IExtendedPalette;
              const activityItemExamples = [
                  {
                      key: 1,
                      activityDescription: [
                          <span key={1} style={nameStyle}>
                              Legal Linda
                          </span>,
          
                          <span key={2}> contacted requestor to provide documents</span>,
                      ],
                      activityIcon: <Icon iconName="fas-clock" />,
                      comments: [
                          <span key={1}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                          </span>,
                      ],
                      timeStamp: "2023-07-15 20:19",
                  },
                  {
                      key: 2,
                      activityDescription: [
                          <span key={1} style={nameStyle}>
                              Legal Linda
                          </span>,
          
                          <span key={2}> contacted requestor to provide documents</span>,
                      ],
                      activityIcon: <Icon iconName="fas-clock" />,
                      comments: [
                          <span key={1}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                          </span>,
                      ],
                      timeStamp: "2023-07-14 20:19",
                  },
                  {
                      key: 3,
                      activityDescription: [
                          <span key={1} style={nameStyle}>
                              Legal Linda
                          </span>,
          
                          <span key={2}> contacted requestor to provide documents</span>,
                      ],
                      activityIcon: <Icon iconName="fas-clock" />,
                      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
                      timeStamp: "2023-07-04 20:19",
                  },
                  {
                      key: 4,
                      activityDescription: [
                          <span key={1} style={nameStyle}>
                              Legal Linda
                          </span>,
          
                          <span key={2}> contacted requestor to provide documents</span>,
                      ],
                      activityIcon: <FontIcon iconName="fas-check" style={{ color: palette.successful }} />,
                      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
                      timeStamp: "2023-07-02 20:19",
                  },
                  {
                      key: 5,
                      activityDescription: [
                          <span key={1} style={nameStyle}>
                              Legal Linda
                          </span>,
                          <span key={2}> contacted requestor to provide documents</span>,
                      ],
                      activityIcon: <FontIcon iconName="fas-xmark" style={{ color: palette.error }} />,
                      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
                      timeStamp: "2023-04-20 20:19",
                  },
              ];
              return (
                  <div>
                      {activityItemExamples.map((item: { key: string | number }) => (
                          <ActivityItem {...item} key={item.key} />
                      ))}
                  </div>
              );
          };`}
        />
      </div>
    </section>
  )
}

export default ActivityTimeline

const nameStyle: React.CSSProperties = {
  fontWeight: 'bold'
}

export const SampleBasic = () => {
  const palette = useTheme().palette as IExtendedPalette
  const activityItemExamples = [
    {
      key: 1,
      activityDescription: [
        <span key={1} style={nameStyle}>
          Legal Linda
        </span>,

        <span key={2}> contacted requestor to provide documents</span>
      ],
      activityIcon: <Icon iconName='fas-clock' />,
      comments: [
        <span key={1}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        </span>
      ],
      timeStamp: '2023-07-15 20:19'
    },
    {
      key: 2,
      activityDescription: [
        <span key={1} style={nameStyle}>
          Legal Linda
        </span>,

        <span key={2}> contacted requestor to provide documents</span>
      ],
      activityIcon: <Icon iconName='fas-clock' />,
      comments: [
        <span key={1}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        </span>
      ],
      timeStamp: '2023-07-14 20:19'
    },
    {
      key: 3,
      activityDescription: [
        <span key={1} style={nameStyle}>
          Legal Linda
        </span>,

        <span key={2}> contacted requestor to provide documents</span>
      ],
      activityIcon: <Icon iconName='fas-clock' />,
      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
      timeStamp: '2023-07-04 20:19'
    },
    {
      key: 4,
      activityDescription: [
        <span key={1} style={nameStyle}>
          Legal Linda
        </span>,

        <span key={2}> contacted requestor to provide documents</span>
      ],
      activityIcon: <FontIcon iconName='fas-check' style={{ color: palette.successful }} />,
      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
      timeStamp: '2023-07-02 20:19'
    },
    {
      key: 5,
      activityDescription: [
        <span key={1} style={nameStyle}>
          Legal Linda
        </span>,
        <span key={2}> contacted requestor to provide documents</span>
      ],
      activityIcon: <FontIcon iconName='fas-xmark' style={{ color: palette.error }} />,
      comments: [<span key={1}>Lorem ipsum dolor sit amet</span>],
      timeStamp: '2023-04-20 20:19'
    }
  ]
  return (
    <div>
      {activityItemExamples.map((item: { key: string | number }) => (
        <ActivityItem {...item} key={item.key} />
      ))}
    </div>
  )
}
