import { ITextFieldStyles, Stack, TextField } from '@gui/fluent-ui-allure'

export const SampleDisabledTextArea = () => {
  const styles: Partial<ITextFieldStyles> = { root: { width: 280 } }
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TextField styles={styles} disabled multiline resizable={false} value='Your text area content goes here.' />
    </Stack>
  )
}
