import React from 'react'
import { Stack, FullCalendar } from '@gui/fluent-ui-allure'
import Heading from '@/atoms/heading'
import UiCodeHighLight from '@/molecules/uicodehighlight'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackRender from '@/atoms/FallBack'

const Calendar = () => {
  return (
    <section>
      <div className='heading-wrapper'>
        <Heading>FullCalendar</Heading>
        <p>
          The calendar control lets people view events by month/week/day view. Currently only month view is supported.
        </p>
      </div>
      <div className='heading-wrapper'>
        <Heading type='subheading'>Basic usage</Heading>
        <p>
          Display daily events, jobs, or courses, users can switch to the previous/next month by clicking the arrow
          button. Click the "Today" button to quickly get back to today. Can show x events in a day area at most and
          click "N more" to show more in the flyout.
        </p>
      </div>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <UiCodeHighLight
          uiChildren={<SampleFullCalendar />}
          codeString={`import {
    Stack,
    FullCalendar
} from "@gui/fluent-ui-allure";
import * as React from "react";
import { FallbackRender } from '@/atoms/FallBack';

const numbers = new Array(40).fill(0).map(() => (Math.random() * 5));
const aDay = 864e5;
const firstDate: Date = new Date((new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1).getTime()) - aDay * 3);

export const SampleFullCalendar: React.FunctionComponent = () => {
    const calendarEvents: any = [];
    new Array(40).fill(0).forEach((_, index) => {
        const nowDate: Date = new Date(firstDate.getTime() + aDay * index);
        if (index % 5 === 0) {
            calendarEvents.push(
                {
                    eventId: \`calendarEventId_\${index}\`,
                    title: \`calendar event title_\${index}\`,
                    start: new Date(nowDate.getTime() - numbers[index] * aDay),
                    end: new Date(nowDate.getTime() + numbers[index] * aDay),
                }
            );
        } else if (index % 4 === 0) {
            calendarEvents.push(
                {
                    eventId: \`calendarEventId_\${index}\`,
                    title: \`calendar event title_\${index}\`,
                    start: nowDate,
                    end: nowDate,
                }
            )
        } else if (index === 17) {
            calendarEvents.push(
                {
                    eventId: \`calendarEventId_fixed1_\${index}\`,
                    title: \`calendar event fixed1 title_\${index}\`,
                    start: nowDate,
                    end: nowDate,
                },
                {
                    eventId: \`calendarEventId_fixed2_\${index}\`,
                    title: \`calendar event fixed2 title_\${index}\`,
                    start: nowDate,
                    end: nowDate,
                },
                {
                    eventId: \`calendarEventId_fixed3_\${index}\`,
                    title: \`calendar event fixed3 title_\${index}\`,
                    start: nowDate,
                    end: nowDate,
                }
            )
        }

    })

    return (
        <Stack>
            <FullCalendar
                calendarEvents={calendarEvents}
            />
        </Stack>
    );
};`}
        />
      </ErrorBoundary>
    </section>
  )
}

export default Calendar

const numbers = new Array(40).fill(0).map(() => Math.random() * 5)
const aDay = 864e5
const firstDate: Date = new Date(new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime() - aDay * 3)

const SampleFullCalendar: React.FunctionComponent = () => {
  const calendarEvents: any = []
  new Array(40).fill(0).forEach((_, index) => {
    const nowDate: Date = new Date(firstDate.getTime() + aDay * index)
    if (index % 5 === 0) {
      calendarEvents.push({
        eventId: `calendarEventId_${index}`,
        title: `calendar event title_${index}`,
        start: new Date(nowDate.getTime() - numbers[index] * aDay),
        end: new Date(nowDate.getTime() + numbers[index] * aDay)
      })
    } else if (index % 4 === 0) {
      calendarEvents.push({
        eventId: `calendarEventId_${index}`,
        title: `calendar event title_${index}`,
        start: nowDate,
        end: nowDate
      })
    } else if (index === 17) {
      calendarEvents.push(
        {
          eventId: `calendarEventId_fixed1_${index}`,
          title: `calendar event fixed1 title_${index}`,
          start: nowDate,
          end: nowDate
        },
        {
          eventId: `calendarEventId_fixed2_${index}`,
          title: `calendar event fixed2 title_${index}`,
          start: nowDate,
          end: nowDate
        },
        {
          eventId: `calendarEventId_fixed3_${index}`,
          title: `calendar event fixed3 title_${index}`,
          start: nowDate,
          end: nowDate
        }
      )
    }
  })

  return (
    <Stack>
      <FullCalendar calendarEvents={calendarEvents} />
    </Stack>
  )
}
