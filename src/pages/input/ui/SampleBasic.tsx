import { ITextFieldStyles, Stack, TextField } from '@gui/fluent-ui-allure'

export const SampleBasic = () => {
  const styles: Partial<ITextFieldStyles> = { root: { width: 280 } }
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TextField styles={styles} />
    </Stack>
  )
}
