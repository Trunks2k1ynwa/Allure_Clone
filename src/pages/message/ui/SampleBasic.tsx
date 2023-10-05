import { MessageBar, MessageBarType, Stack } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <MessageBar messageBarType={MessageBarType.info}>Information message content with nothing else.</MessageBar>

      <MessageBar messageBarType={MessageBarType.severeWarning}>Warning message content with nothing else.</MessageBar>
      <MessageBar messageBarType={MessageBarType.error}>Error message content with nothing else.</MessageBar>
    </Stack>
  )
}
