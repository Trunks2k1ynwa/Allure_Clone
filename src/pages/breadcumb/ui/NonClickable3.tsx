import { Breadcrumb, IBreadcrumbItem } from '@gui/fluent-ui-allure'
import * as React from 'react'

export const NonClickable3 = () => {
  function onItemClick(_ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
    console.log(`Breadcrumb item with key "${item.key}" has been clicked.`)
  }

  const items: IBreadcrumbItem[] = [
    { text: 'Home', key: 'k1', onClick: onItemClick },
    { text: 'Second Level', key: 'k2', onClick: onItemClick },
    { text: 'Third Level', key: 'k3', onClick: onItemClick },
    { text: 'Application management', key: 'k4', onClick: onItemClick },
    { text: 'Application detail', key: 'k5' }
  ]

  return (
    <Breadcrumb
      items={items}
      overflowIndex={1}
      maxDisplayedItems={3}
      ariaLabel='Breadcrumb with items rendered as buttons'
      overflowAriaLabel='More links'
    />
  )
}
