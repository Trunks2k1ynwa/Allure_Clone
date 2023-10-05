import './index.scss'
import { Accordion, AccordionItem } from '@gui/fluent-ui-allure'
import { Link } from 'react-router-dom'
import { dataAccordions } from './data'
import Heading from '~/components/atoms/heading'

const ChangeLog = () => {
  return (
    <section className='heading-wrapper'>
      <Heading>Change Log</Heading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px 0' }}>
        {dataAccordions.map((dataAccordion, index) => (
          <div key={`item ${index}`}>
            <Accordion defaultExpandedItems={['item1']}>
              <AccordionItem itemKey='item1' headerText={dataAccordion.title}>
                {dataAccordion.items.map((item) => (
                  <>
                    <span className='text-span'>{item.label}</span>
                    <div className='accordion-wrapper'>
                      {item.listLinks.map((link, index) => (
                        <div key={`item ${index}`} className='accordion-item'>
                          <Link to='https://jira.avepoint.net/browse/APAUI-170' target='_blank'>
                            {link.link}
                          </Link>
                          <span>{link.params}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChangeLog
