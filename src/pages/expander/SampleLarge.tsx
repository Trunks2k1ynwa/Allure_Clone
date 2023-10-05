import { Accordion, AccordionItem } from '@gui/fluent-ui-allure'
export const SampleLarge = () => {
  return (
    <Accordion size='large' multiple defaultExpandedItems={['item1']}>
      <AccordionItem itemKey='item1' headerText='About'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        doloret. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et doloret.
      </AccordionItem>
    </Accordion>
  )
}
