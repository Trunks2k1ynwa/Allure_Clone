import { MessageBar, MessageBarType, Stack } from '@gui/fluent-ui-allure'

export const SampleMultiline = () => {
  return (
    <Stack style={{ width: 320 }} tokens={{ childrenGap: 20 }}>
      <MessageBar messageBarType={MessageBarType.info} isMultiline>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, aliquid similique laudantium reiciendis omnis
        libero reprehenderit velit est ullam numquam, maxime quisquam dolor. Architecto, sed ipsum distinctio quibusdam
        fugit neque?
      </MessageBar>

      <MessageBar messageBarType={MessageBarType.severeWarning} isMultiline>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nesciunt iusto. Eos quibusdam, libero,
        itaque culpa ipsam odit doloremque omnis reprehenderit quis eaque cumque sequi hic! Sequi iusto ad quas.
      </MessageBar>
      <MessageBar messageBarType={MessageBarType.error} isMultiline>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam similique, dolores illum rem facilis, est
        animi saepe fugit, voluptates nulla. Eveniet fugit, animi perspiciatis expedita tempora sunt accusamus facilis.
      </MessageBar>
    </Stack>
  )
}
