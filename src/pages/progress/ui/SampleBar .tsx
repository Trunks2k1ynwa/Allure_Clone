import { Stack, Progress } from '@gui/fluent-ui-allure'

export const SampleBar = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 80 }}>
      <Stack tokens={{ childrenGap: 16 }}>
        <Progress size={256} percent={0}></Progress>
        <Progress size={256} percent={85}></Progress>
        <Progress size={256} percent={100} status='success' text='Successfully'></Progress>
        <Progress size={256} percent={70} status='failed' text='Upload failed'></Progress>
      </Stack>
      <Stack tokens={{ childrenGap: 24 }}>
        <Progress size={256} percent={0} textDirectional='bottom'></Progress>
        <Progress size={256} percent={85} textDirectional='bottom'></Progress>
        <Progress size={256} percent={100} status='success' text='Successfully' textDirectional='bottom'></Progress>
        <Progress size={256} percent={70} status='failed' text='Upload failed' textDirectional='bottom'></Progress>
      </Stack>
    </Stack>
  )
}
