import { TooltipHost, Stack } from '@gui/fluent-ui-allure'

export const SampleOverflow = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TooltipHost
        calloutProps={{ isBeakVisible: false }}
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt voluptates placeat culpa eligendi, ad quidem numquam voluptas odit cumque nisi est delectus odio cum magni praesentium quos expedita maiores!'
      >
        <p style={{ width: 200, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt voluptates placeat culpa eligendi, ad
          quidem numquam voluptas odit cumque nisi est delectus odio cum magni praesentium quos expedita maiores!
        </p>
      </TooltipHost>
    </Stack>
  )
}
