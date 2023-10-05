import { Breadcrumb, IBreadcrumbItem } from '@gui/fluent-ui-allure'

export const SampleRoot = () => {
  const items: IBreadcrumbItem[] = [{ text: 'Home', key: 'Home' }]

  return (
    <Breadcrumb
      items={items}
      maxDisplayedItems={10}
      ariaLabel='Breadcrumb with items rendered as buttons'
      overflowAriaLabel='More links'
    />
  )
}
