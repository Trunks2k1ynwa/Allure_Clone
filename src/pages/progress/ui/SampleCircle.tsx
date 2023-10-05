import { Stack, Progress } from '@gui/fluent-ui-allure'

export const SampleCircle = () => {
  return (
    <Stack tokens={{ childrenGap: 80 }}>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <Progress
          progressType='circle'
          size={120}
          percent={0}
          styles={{ circleIcon: { fontSize: 36 }, circleText: { fontSize: 24 } }}
        ></Progress>
        <Progress progressType='circle' size={120} percent={85}></Progress>
        <Progress progressType='circle' size={120} percent={85} showIconInprogress={true}></Progress>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: 16 }}>
        <Progress progressType='circle' size={120} percent={100} status={'success'}></Progress>
        <Progress progressType='circle' size={120} percent={100} status={'warning'}></Progress>
        <Progress progressType='circle' size={120} percent={100} status={'failed'}></Progress>
      </Stack>
    </Stack>
  )
}
