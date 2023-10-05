import { MessageBar, MessageBarType, Stack } from '@gui/fluent-ui-allure'

export const SampleDismiss = () => {
  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <MessageBar messageBarType={MessageBarType.info}>
        Harum, aliquid similique laudantium reiciendis omnis libero reprehenderit velit est ullam numquam, maxime
        quisquam dolor.
      </MessageBar>

      <MessageBar messageBarType={MessageBarType.severeWarning}>
        Distinctio, nesciunt iusto. Eos quibusdam, libero, itaque culpa ipsam odit doloremque omnis reprehenderit.
      </MessageBar>
      <MessageBar messageBarType={MessageBarType.error}>
        Error veniam similique, dolores illum rem facilis, est animi saepe fugit, voluptates nulla.
      </MessageBar>
    </Stack>
  )
}
