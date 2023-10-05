import { Stack, Progress } from '@gui/fluent-ui-allure'

export const SampleStatic = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 80 }}>
      <Progress progressType='static' size={256} section={4} percent={25} text='Completion Degree: 25%'></Progress>
    </Stack>
  )
}
