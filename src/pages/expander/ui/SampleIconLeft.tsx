import { Accordion, AccordionItem, IAccordionItemProps, Icon, Stack } from '@gui/fluent-ui-allure'
import * as React from 'react'

export const SampleIconLeft = () => {
  const [expandedItems, setExpandedItems] = React.useState(['item2'])

  function onToggle(itemKey: string) {
    if (expandedItems.includes(itemKey)) {
      setExpandedItems([])
    } else {
      setExpandedItems([itemKey])
    }
  }

  function renderButtons1(_item: IAccordionItemProps) {
    return (
      <Stack horizontal tokens={{ childrenGap: 26 }}>
        <Icon style={{ cursor: 'pointer' }} onClick={() => console.log('setting')} iconName={'fas-gear'} />
        <Icon style={{ cursor: 'pointer' }} onClick={() => console.log('edit')} iconName={'fas-pencil'} />
        <Icon style={{ cursor: 'pointer' }} onClick={() => console.log('delete')} iconName={'far-trash-can'} />
      </Stack>
    )
  }

  function renderButtons2(_item: IAccordionItemProps) {
    return (
      <Stack horizontal tokens={{ childrenGap: 26 }}>
        <Icon style={{ cursor: 'pointer' }} onClick={() => console.log('edit')} iconName={'fas-pencil'} />
        <Icon style={{ cursor: 'pointer' }} onClick={() => console.log('delete')} iconName={'far-trash-can'} />
      </Stack>
    )
  }

  return (
    <Accordion
      renderButtons={renderButtons1}
      iconPosition='left'
      size='medium'
      expandedItems={expandedItems}
      onItemClick={(key) => onToggle(key)}
    >
      <AccordionItem itemKey='item1' headerText='About'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        doloret. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et doloret.
        <p />
        <Accordion renderButtons={renderButtons2} iconPosition='left' size='small' defaultExpandedItems={['subItem1']}>
          <AccordionItem itemKey='subItem1' headerText='Child title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis
            inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae
            reiciendis dolor.
          </AccordionItem>
        </Accordion>
      </AccordionItem>
      <AccordionItem itemKey='item2' headerText='About'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        doloret. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et doloret.
        <p />
        <Accordion renderButtons={renderButtons2} iconPosition='left' size='small' defaultExpandedItems={[]}>
          <AccordionItem itemKey='subItem2' headerText='Child title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim sequi, dolorem doloremque eum veniam quis
            inventore ex commodi mollitia alias perspiciatis voluptatum exercitationem obcaecati veritatis ab beatae
            reiciendis dolor.
          </AccordionItem>
        </Accordion>
      </AccordionItem>
    </Accordion>
  )
}
