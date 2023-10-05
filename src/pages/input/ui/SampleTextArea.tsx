import { ITextFieldStyles, Stack, TextField } from '@gui/fluent-ui-allure'

export const SampleTextArea = () => {
  const styles: Partial<ITextFieldStyles> = { root: { width: 280 } }
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TextField styles={styles} multiline resizable={false} />
    </Stack>
  )
}
