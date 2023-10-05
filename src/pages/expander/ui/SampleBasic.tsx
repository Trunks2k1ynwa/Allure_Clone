import { Accordion, AccordionItem } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  return (
    <Accordion defaultExpandedItems={['item1']}>
      <AccordionItem itemKey='item1' headerText='About'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        doloret. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et doloret.
        <p />
        <Accordion size='small' defaultExpandedItems={['subItem1']}>
          <AccordionItem itemKey='subItem1' headerText='Child title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis
            inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae
            reiciendis dolor.
          </AccordionItem>
        </Accordion>
      </AccordionItem>
    </Accordion>
  )
}
