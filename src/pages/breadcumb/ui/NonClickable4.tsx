import { Breadcrumb, IBreadcrumbItem } from '@gui/fluent-ui-allure'

export const NonClickable4 = () => {
  function onItemClick(_ev?: MouseEvent, item?: IBreadcrumbItem | undefined): void {
    console.log(`Breadcrumb item with key "${item!.key}" has been clicked.`)
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
      maxDisplayedItems={2}
      ariaLabel='Breadcrumb with items rendered as buttons'
      overflowAriaLabel='More links'
    />
  )
}
