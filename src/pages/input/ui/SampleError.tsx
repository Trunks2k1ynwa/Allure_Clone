import { ITextFieldStyles, Stack, TextField } from '@gui/fluent-ui-allure'

export const SampleError = () => {
  const styles: Partial<ITextFieldStyles> = { root: { width: 280 } }
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      <TextField styles={styles} errorMessage={'This field is required'} placeholder='input' />
    </Stack>
  )
}
